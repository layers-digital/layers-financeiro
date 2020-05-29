const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const hydratePayables = require('./pipes/hydratePayables');
const filterCriticalPayables = require('./pipes/filterCriticalPayables');
const hydrateGroups = require('./pipes/hydrateGroups');
const axios = require('axios');
// const dataset_1 = require('./mockedData/dataset_1')
// const dataset_2 = require('./mockedData/dataset_2')
// const dataset_3 = require('./mockedData/dataset_3')

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// let data1 = dataset_1()
// let data2 = dataset_2()
// let data3 = dataset_3()

// let mockedData = [{result: []}]

// mockedData[0].result.push(data1)
// mockedData[0].result.push(data2)
// mockedData[0].result.push(data3)

app.get('/related', async function (req, res) {
  const { userToken, community } = req.query

  if(!userToken) {
    return res.status(400).send({error: `user token not provided`})
  }

  if(!community) {
    return res.status(400).send({error: `community not provided`})
  }

  const Layers = axios.create({
    baseURL: functions.config().layers.url || 'http://localhost:8009/v1',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'community-id': community
    }
  })

  //Fetch user data
  let userData = null
  try {
    let res = await Layers.get('/user/me/', {
      headers: { 'Authorization': `Bearer ${userToken}`}
    })
    userData = res.data
  } catch(err) {
    console.log('ERROR', err)
    return res.status(500).send({error: `Error fetching user data`})
  }

  //Discovery providers
  let providers = null
  try {
    let res = await Layers.get(`/services/discover/@layers:payments:Payables:getRelated?version=1`,
    {
      headers: { 'Authorization': functions.config().layers.token,}
    })

    providers = res.data
    console.log('Providers', providers)
  } catch(err) {
    console.log('Error fetching providers', err)
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
        payload: await Layers.post(`/services/call/@layers:payments:Payables:getRelated/${provider.id}?version=1`, data,
        {
          headers: { 'Authorization': functions.config().layers.token }
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
      result: data.payload.data.data.result,
    }
    payload.push(providerPayload)
  })


  //Mocked data
  // payload = mockedData

  payload = hydrateGroups(payload)
  payload = hydratePayables(payload)
  payload = filterCriticalPayables(payload)

  res.status(200).send(payload)
})

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);