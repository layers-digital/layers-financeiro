const functions = require('firebase-functions');
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: functions.config().sentry.dsn,
  environment: functions.config().sentry.env,
  attachStacktrace: true
});

const api = require('./api');

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(api);
