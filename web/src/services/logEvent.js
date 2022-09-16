import amplitude from 'amplitude-js';
import { initializeApp } from 'firebase/app';
import { initializeAnalytics, setUserProperties, logEvent, setUserId } from 'firebase/analytics';
import environment from '@/environment';

const firebaseConfig = environment.GA_CONFIG;
const amplitudeConfig = environment.AMPLITUDE_CONFIG;

const hasFirebaseConfig = !!firebaseConfig.apiKey;
const amplitudeConfigKeys = amplitudeConfig.apiKeys.filter((key) => key);

let analytics = null;
const amplitudeInstances = amplitudeConfigKeys.map((key) => {
  const instance = amplitude.getInstance(key);
  instance.init(key);
  return instance;
});

if (hasFirebaseConfig) {
  const app = initializeApp(firebaseConfig);
  analytics = initializeAnalytics(app, {
    config: {
      cookie_flags: 'max-age=7200;secure;samesite=none',
    },
  });
}

function setUserPropsLogEvents(userId, customProps) {
  amplitudeInstances.forEach((instance) => {
    instance.setUserId(userId);
    instance.setUserProperties(customProps);
  });

  if (hasFirebaseConfig) {
    setUserId(analytics, userId);
    setUserProperties(analytics, customProps);
  }
}

function sendLogEvents(event, props = {}) {
  const appId = window.LayersPortalOptions.appId;

  amplitudeInstances.forEach((instance) => {
    instance.logEvent(event, { ...props, appId });
  });

  if (hasFirebaseConfig) {
    logEvent(analytics, event, { ...props, appId });
  }
}

export { setUserPropsLogEvents, sendLogEvents };
