const moment = require('moment')

module.exports = filterCriticalPayables

function filterCriticalPayables(payload) {

  payload.forEach((provider) => {
      let criticalPayables = []
    provider.result.forEach(group => {
      group.payables.forEach(payable => {
        let now = moment()
        let dueAt = moment(payable.dueAt)
        let diff = dueAt.diff(now, 'days')

        //Ordenar pelo q venceu a mais tempo
        //Incluir pending <= 15
        if(diff <= 7 && payable.status != 'paid' && payable.status != 'canceled' || payable.status == 'pending') {
          //Flag to define if this payable is critical
          payable.isCritical = true

          criticalPayables.push(payable)
        }
      })

    })
      provider.criticalPayables = criticalPayables
  })

  return payload
}
