const removeMd = require('remove-markdown');

module.exports = hydratePayables

function hydratePayables(payload) {
  payload.forEach((provider) => {
    provider.result.forEach(group => {
      group.payables.forEach(payable => {
        //Copy group id to each payable
        payable.groupId = group.id

        //Create installments total inside each payable
        payable.friendlyInstallmentsCount = `${payable.installment} de ${group.installments || group.payables.length}`

        //Copy group title to each payable
        payable.title = group.title

        //Flag to define if this payable is critical
        payable.isCritical = false

        //Friendly total amount
        const amountTotal = payable.centsTotal / 100

        if (!isNaN(amountTotal)) {
          payable.amountTotal = amountTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }
        //Friendly paid amount
        const amountPaid = payable.centsPaid / 100
        
        if (!isNaN(amountPaid)) {
          payable.amountPaid = amountPaid.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }

        //Friendly original amount
        payable.amountOriginal = (payable.centsOriginal/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

        //Text description
        payable.textDescription = removeMd(payable.description)
      })
    })
  })

  return payload
}