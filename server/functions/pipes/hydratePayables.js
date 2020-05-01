module.exports = hidratePayables

function hidratePayables(payload) {

  payload.groups.forEach(group => {
    group.payables.forEach(payable => {
      //Copy group id to each payable
      payable.groupId = group.id

      //Create installments total inside each payable
      payable.friendlyInstallmentsCount = `${payable.installment} de ${group.installments || group.payables.length}`

      //Copy group title to each payable
      payable.title = group.title

      //Flag to define if this payable is critical
      payable.isCritical = false

      //Friendly amount
      payable.amount = `R$ ${(payable.centsTotal/100).toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})}`
    })
  })

  return payload
}