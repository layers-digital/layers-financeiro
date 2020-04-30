module.exports = hydrateGroups

function hydrateGroups(payload) {

  payload.groups.forEach(group => {
    group.friendlyInstallmentsTotal = `${group.installments || group.payables.length} cobranças`
  })

  return payload
}