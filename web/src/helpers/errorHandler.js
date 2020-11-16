import Toast from '@/helpers/toast';

export default function errorHandler({ error, callback, parameters }) {
  if (!error || (parameters && parameters.hideError)) {
    return;
  }

  let retryable = false;

  let params = Object.assign(
    {
      message: '',
      type: 'danger',
      position: 'bottom',
      timeout: 5000,
      options: {},
    },
    parameters
  );

  let action = Object.assign(
    {
      label: 'ATUALIZAR',
      color: 'white',
      callback,
    },
    parameters && parameters.action
  );

  if (!window.navigator.onLine) {
    params.message = 'Parece que você está offline.';
    params.type = 'info';
  } else if (params.fixedMessageError) {
    params.message = params.fixedMessageError;
  } else if (error.response && error.response.status && error.response.status >= 400 && error.response.status < 500) {
    params.message = 'Algumas informações não foram atualizadas.';
    retryable = true;
  } else if (error.response && error.response.status >= 500) {
    params.message = 'Ops, encontramos um erro. Tente novamente mais tarde.';
  } else {
    params.message = 'Um problema aconteceu e foi enviado para análise';
    retryable = true;
  }

  if (retryable && typeof callback == 'function') {
    params.action = action;
  }

  Toast.open(params);
}
