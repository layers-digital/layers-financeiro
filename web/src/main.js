import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';
import createStore from './store';
import General from './styles/General.css';
import Grid from './styles/Grid.css';
import Colors from './styles/Colors.css';
import Transitions from './styles/Transitions.css';
import Text from './styles/Text.css';
import Utils from './styles/Utils.css';
import Environment from './environment';
import * as firebase from 'firebase/app';
import getQueryVariable from '@/helpers/getQueryVariable';
import 'firebase/analytics';
import 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyA74S5V0iMvqNokEhyrgWeejZmOIPGl7SE',
  authDomain: 'layers-financeiro.firebaseapp.com',
  databaseURL: 'https://layers-financeiro.firebaseio.com',
  projectId: 'layers-financeiro',
  storageBucket: 'layers-financeiro.appspot.com',
  messagingSenderId: '268095587401',
  appId: '1:268095587401:web:0c7cab8f9239ca94356b98',
  measurementId: 'G-ZN6ZTYL4YG',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();

Vue.prototype.$analytics = firebase.analytics();

Vue.config.productionTip = false;

Axios.defaults.baseURL = Environment.API_URL;

async function init() {
  let communityId, userId;
  try {
    await LayersPortal.connectedPromise;
    communityId = LayersPortal.communityId;
    userId = LayersPortal.userId;
  } catch (err) {
    communityId = getQueryVariable('community');
    userId = getQueryVariable('token');
  }

  const store = createStore({
    communityId,
    userId,
  });

  await store.dispatch('layers/init');

  new Vue({
    router,
    store,
    General,
    Grid,
    Colors,
    Transitions,
    Text,
    Utils,
    Axios,
    Environment,
    render: function (h) {
      return h(App);
    },
  }).$mount('#app');
}

init();
