const functions = require('firebase-functions');
const hydratePayables = require('./pipes/hydratePayables');
const filterCriticalPayables = require('./pipes/filterCriticalPayables');
const hydrateGroups = require('./pipes/hydrateGroups');
const axios = require('axios');
const _ = require('lodash');

const INTENT = '@layers:payments:Payables:getRelated'

const relatedAPI = async function (req, res) {
  // Disable CORS when is running locally
  if(process.env.FUNCTIONS_EMULATOR) {
    res.set({ 'Access-Control-Allow-Origin': '*' })
  }

  const { userToken, community, session, userId } = req.query

  if(!userToken && !session) {
    return res.status(400).send({error: `user token or session not provided`})
  }

  if(!userToken && session && !userId) {
    return res.status(400).send({error: `userId not provided`})
  }

  if(!community) {
    return res.status(400).send({error: `community not provided`})
  }

  const Layers = axios.create({
    baseURL: functions.config().layers.api || 'http://localhost:8009/v1',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'X-Community-Id': community
    }
  })

  //Fetch user data
  let userData = null
  if(session) {
    try {
      await Layers.get(`/sso/session/validate?community=${community}&session=${session}&userId=${userId}`, {
        headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
      })
    } catch(err) {
      return res.status(401).send({error: `Invalid session`})
    }

    try {
      let res = await Layers.get(`/users/${userId}`, {
        headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
      })
      userData = res.data
    } catch(err) {
      return res.status(401).send({error: `Error fetching user data`})
    }
  } else {
    // Deprecated method to validate user token
    try {
      let res = await Layers.get('/user/me/', {
        headers: { 'Authorization': `Bearer ${userToken}`}
      })
      userData = res.data
    } catch(err) {
      return res.status(401).send({error: `Error fetching user data using deprecated method`})
    }
  }

  //Discovery providers
  let providers = []
  try {
    let res = await Layers.get(`/services/discover/${INTENT}?version=1`,
    {
      headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
    })

    providers = res.data
  } catch(err) {
    return res.status(500).send({error: `Error fetching providers`})
  }

  // Call intents
  const promises = providers.map(async provider => {
    const data = {
      user: {
        id: userData._id,  // ID do usuário
        name: userData.name,  // Nome do usuário
        alias: userData.alias,  // Alias do usuário
        // timezone: String,  // Fuso horário do usuário
        // language: String,  // Língua preferencial do usuário
        // accountId: String,  // ID da account do usuário
      },
      // createdAfter: Date | null, // Se for diferente de nulo a resposta deverá conter apenas os novos dados depois dessa data
    }
    try {
      return {
        status: 'success',
        provider: provider,
        payload: await Layers.post(`/services/call/${INTENT}/${provider.id}?version=1&timeout=10000`, data,
        {
          headers: { 'Authorization': 'Bearer ' + functions.config().layers.secret }
        })
      }
    } catch(err) {
      return {
        status: 'error',
        provider: provider,
        payload: err
      }
    }
  })

  let providersData = await Promise.all(promises)

  let payload = []

  providersData.forEach(data => {
    let providerPayload = {
      provider: data.provider,
      result: _.get(data, 'payload.data.data.result', [])
    }
    payload.push(providerPayload)
  })

  payload = hydrateGroups(payload)
  payload = hydratePayables(payload)
  payload = filterCriticalPayables(payload)

  res.status(200).send(payload)
}

// Expose Express API as a single Cloud Function:
exports.related = functions.https.onRequest(relatedAPI);