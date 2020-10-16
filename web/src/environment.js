// TODO: Do not check URL in order to know the environment
const URL = window.location.hostname;
function isLocal() {
  if (URL == 'localhost') return true;
  if (URL.includes('192.168')) return true;
  return false;
}

function isStaging() {
  if (URL.includes('layers-financeiro-staging')) return true;
  return false;
}

function LayersApiLocation() {
  // Handle local development
  if (isLocal()) {
    if (URL == 'localhost') return 'http://localhost:8009/v1';
    if (URL.includes('192.168')) return URL.replace(/:\d+.*/, ':8009/v1');
  }

  if (isStaging()) {
    return 'https://api.staging.layers.digital/v1';
  }

  // Defaults to production api
  return 'https://api.layers.digital/v1';
}

function ApiLocation() {
  // Handle local development
  if (isLocal()) {
    return 'http://localhost:8050/layers-financeiro/us-central1';
  }

  if (isStaging()) {
    return '/api';
  }

  // Defaults to production api
  return '/api';
}

export default {
  LAYERS_API_URL: LayersApiLocation(),
  API_URL: ApiLocation(),
};
