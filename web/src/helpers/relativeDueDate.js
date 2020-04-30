export default function relativeDueDate(dueDate) {
  let seconds = Math.floor((new Date() - new Date(dueDate)) / 1000)
  let prefix = ''
  let isFuture = false

  if(seconds < 0) {
    prefix = 'Vencerá em'
    isFuture = true
    seconds = seconds * -1
  } else {
    prefix = 'Venceu há'
  }

  let diffModule = getTimeDiffModule(seconds, isFuture)

  let readableDiff = `${prefix} ${diffModule}`

  //Special cases
  if(diffModule == 'Vence hoje' || diffModule == 'Vencerá amanhã' || diffModule == 'Venceu ontem') {
    readableDiff = diffModule
  }

  return readableDiff
}

function getTimeDiffModule(seconds, isFuture) {
  let diff = Math.floor(seconds / 31536000)

  if (diff > 1) {
    return `${diff} anos`;
  }
  diff = Math.floor(seconds / 2592000);
  if (diff > 1) {
    return `${diff} meses`;
  }
  diff = Math.floor(seconds / 86400);
  if (diff > 1) {
    return `${diff} dias`;
  }
  diff = Math.floor(seconds / 3600);
  let today = new Date()
  let dueDateHours = new Date()
  dueDateHours.setHours(dueDateHours.getHours() - diff)

  if(today.getDay() == dueDateHours.getDay()) {
    return 'Vence hoje'
  }

  if(isFuture) {
    return 'Vencerá amanhã'
  } else {
    return 'Venceu ontem'
  }
}