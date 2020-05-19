const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const hydratePayables = require('./pipes/hydratePayables');
const filterCriticalPayables = require('./pipes/filterCriticalPayables');
const hydrateGroups = require('./pipes/hydrateGroups');
const dataset_1 = require('./mockedData/dataset_1')
const dataset_2 = require('./mockedData/dataset_2')
const dataset_3 = require('./mockedData/dataset_3')

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

let data1 = dataset_1()
let data3 = dataset_3()
let data2 = dataset_2()

let mockedData = {groups: []}

mockedData.groups.push(data2)
mockedData.groups.push(data1)
mockedData.groups.push(data3)

app.get('/related', function (req, res) {
  //Validate token

  //get user info

  //get layers secret
  const secret = functions.config().layers.secret

  if(!secret) {
    res.status(500).send({error: `secret not found`})
	}

  //Mount request

  //Make request
  let payload = mockedData

  payload = hydrateGroups(payload)
  payload = hydratePayables(payload)
  payload = filterCriticalPayables(payload)

  res.status(200).send(payload)
})

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);