import amplitude from 'amplitude-js';
import { initializeApp } from 'firebase/app';
import { initializeAnalytics, setUserProperties, logEvent, setUserId } from 'firebase/analytics';
import environment from '@/environment';

const firebaseConfig = environment.GA_CONFIG;
const amplitudeConfig = environment.AMPLITUDE_CONFIG;

const hasFirebaseConfig = firebaseConfig.apiKey;
const hasAmplitudeConfig = amplitudeConfig.apiKey;

let analytics = null;
const amplitudeInstance = amplitude.getInstance();

if (hasFirebaseConfig) {
  const app = initializeApp(firebaseConfig);
  analytics = initializeAnalytics(app, {
    config: {
      cookie_flags: 'max-age=7200;secure;samesite=none',
    },
  });
}

if (hasAmplitudeConfig) {
  amplitudeInstance.init(hasAmplitudeConfig);
}

function setUserPropsLogEvents(userId, customProps) {
  if (hasAmplitudeConfig) {
    amplitudeInstance.setUserId(userId);
    amplitudeInstance.setUserProperties(customProps);
  }

  if (hasFirebaseConfig) {
    setUserId(analytics, userId);
    setUserProperties(analytics, customProps);
  }
}

function sendLogEvents(event, props = {}) {
  const appId = window.LayersPortalOptions.appId;

  if (hasAmplitudeConfig) {
    amplitudeInstance.logEvent(event, { ...props, appId });
  }

  if (hasFirebaseConfig) {
    logEvent(analytics, event, { ...props, appId });
  }
}

export { setUserPropsLogEvents, sendLogEvents };
