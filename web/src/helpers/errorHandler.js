import Toast from '@/helpers/toast'

export default function errorHandler(e, fnToRetry, fnToRetryParams) {
  if(!e) {
    return
  }

  let retryable = false

  let params = {
    message: '',
    type: 'danger',
    position: 'bottom',
    timeout: 8000,
    options: {},
  }

  let action = {
    label: 'Tentar novamente',
    color: 'white',
    fn: fnToRetry,
    fnParams: fnToRetryParams,
  }

  if(!window.navigator.onLine) {
    params.message = 'Parece que você está desconectado'
    params.type = 'info'
    retryable = true
  } else if (e.response && e.response.status && e.response.status >=  400 && e.response.status < 500) {
    params.message = 'Ops, algo deu errado :('
    retryable = true
  } else if (e.response && e.response.status >=  500) {
    params.message = 'Ops, encontramos um erro. Tente novamente mais tarde.'
  } else {
    params.message = 'Um problema aconteceu e foi enviado para análise'
    retryable = true
  }

  if(retryable) {
    params.action = action
  }

  Toast.open(params)
}