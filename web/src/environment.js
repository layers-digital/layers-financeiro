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
    return 'http://localhost:8058/layers-financeiro/us-central1/api/api/';
  }

  if (isStaging()) {
    return '/api';
  }

  // Defaults to production api
  return '/api';
}

function getGAEnvs() {
  if (isLocal() || isStaging()) {
    return {
      apiKey: 'AIzaSyClS3lDBKyTg1AI2E9IESLZDEDX9EpDOhM',
      authDomain: 'layers-financeiro-staging.firebaseapp.com',
      databaseURL: 'https://layers-financeiro-staging.firebaseio.com',
      projectId: 'layers-financeiro-staging',
      storageBucket: 'layers-financeiro-staging.appspot.com',
      messagingSenderId: '320015245972',
      appId: '1:320015245972:web:c2bf16ad1888b2ff0c8a81',
      measurementId: 'G-Y8FNK8LH4G',
    };
  }
  return {
    apiKey: 'AIzaSyA74S5V0iMvqNokEhyrgWeejZmOIPGl7SE',
    authDomain: 'layers-financeiro.firebaseapp.com',
    databaseURL: 'https://layers-financeiro.firebaseio.com',
    projectId: 'layers-financeiro',
    storageBucket: 'layers-financeiro.appspot.com',
    messagingSenderId: '268095587401',
    appId: '1:268095587401:web:0c7cab8f9239ca94356b98',
    measurementId: 'G-ZN6ZTYL4YG',
  };
}

function getAmplitudeEnvs() {
  // DEFINIR ORGANIZACAO DO AMPLITUDE PROD E PEGAR ENVS
  if (isLocal() || isStaging()) {
    return {
      apiKey: '8a1851e3850941ec180e615198eae946',
    };
  }

  return {
    apiKey: '',
  };
}

export default {
  LAYERS_API_URL: LayersApiLocation(),
  API_URL: ApiLocation(),

  // Google Analytics
  GA_CONFIG: getGAEnvs(),

  // Amplitude Analytics
  AMPLITUDE_CONFIG: getAmplitudeEnvs(),
};
