module.exports = hydrateGroups

function hydrateGroups(payload) {
  payload.forEach((provider) => {
    provider.result.forEach(group => {
      group.friendlyInstallmentsTotal = `${group.installments || group.payables.length} cobranças`
    })
  })

  return payload
}