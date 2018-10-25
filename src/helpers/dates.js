import format from 'date-fns/format';

export default function formatDate(date) {
  return format(date);
}

export function norDate(date) {
  return format(date, 'DD/MM HH:ss');
}
