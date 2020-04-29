const moment = require('moment')

module.exports = filterCriticalPayables

function filterCriticalPayables(payload) {
  let criticalPayables = []

  payload.groups.forEach(group => {
    group.payables.forEach(payable => {
      let now = moment()
      let dueAt = moment(payable.dueAt)
      let diff = dueAt.diff(now, 'days')

      if(diff <= 7) {
        payable.groupId = group.id
        payable.groupTitle = group.title
        criticalPayables.push(payable)
      }
    })
  })

  payload.criticalPayables = criticalPayables

  return payload
}