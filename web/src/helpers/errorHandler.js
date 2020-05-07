
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
    timeout: 5000,
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
  } else if (e.status && e.status.code >=  400 && e.status.code < 500) {
    params.message = 'Ops, algo deu errado :('
    retryable = true
  } else if (e.status && e.status.code >=  500) {
    params.message = 'Ops, encontramos um erro. Tente novamente mais tarde.'
  } else if (e.error) {
    params.message = e.error
    retryable = true
  } else {
    params.message = 'Um problema aconteceu e foi enviado para análise'
    retryable = true
  }

  if(retryable) {
    params.action = action
  }

  Toast.open(params)
}