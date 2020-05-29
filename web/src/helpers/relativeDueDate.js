import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

export default function relativeDueDate(dueDate) {
  dayjs.extend(relativeTime)
  if(dayjs().isSame(dayjs(dueDate), 'day')) {
    return "Vence hoje"
  }

  if(dayjs().isBefore(dayjs(dueDate), 'day')) {
    return `Vencerá ${dayjs(dueDate).locale('pt-br').fromNow()}`
  }

  if(dayjs().isAfter(dayjs(dueDate), 'day')) {
    return `Venceu ${dayjs(dueDate).locale('pt-br').fromNow()}`
  }

  return ''
}