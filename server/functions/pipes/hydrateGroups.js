module.exports = hydrateGroups

function hydrateGroups(payload) {

  payload.groups.forEach(group => {
    group.friendlyInstallmentsTotal = `${group.installments || group.payables.length} cobranças`

    //Mocked data
    group.icon = "https://cdn.layers.digital/demo-escola/uploads/7d481323-4f95-417e-bc62-6eb4e58a066a/image8.png"
  })

  return payload
}