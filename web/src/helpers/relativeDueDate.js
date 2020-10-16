import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';

export default function relativeDueDate(dueDate) {
  dayjs.extend(relativeTime);
  dayjs.extend(isTomorrow);
  dayjs.extend(isYesterday);

  if (dayjs().isSame(dayjs(dueDate), 'day')) {
    return 'Vence hoje';
  }

  if (dayjs(dueDate).isTomorrow()) {
    return 'Vence amanhã';
  }

  if (dayjs(dueDate).isYesterday()) {
    return 'Venceu ontem';
  }

  if (dayjs().isBefore(dayjs(dueDate), 'day')) {
    return `Vencerá ${dayjs(dueDate).locale('pt-br').fromNow()}`;
  }

  if (dayjs().isAfter(dayjs(dueDate), 'day')) {
    return `Venceu ${dayjs(dueDate).locale('pt-br').fromNow()}`;
  }

  return '';
}
