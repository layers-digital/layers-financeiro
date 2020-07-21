/* global LayersPortal */

import Toast from '@/helpers/toast'

export default async function downloadFile(url, name) {
  //  Toast.open({
  //   message: 'Estamos fazendo download do arquivo...',
  //   position: 'top',
  //   type: 'success',
  //   timeout: 4000,
  //   options: { loading: true }
  //  })

  try {
    await LayersPortal('download', {
      url: url,
      name: name,
    })
  } catch (error) {
    Toast.hideAll()
    Toast.open({
      message: 'Ops! Algo deu errado no seu download, tente novamente.',
      type: 'danger',
      position: 'top',
      timeout: 10000
    })
  }
}