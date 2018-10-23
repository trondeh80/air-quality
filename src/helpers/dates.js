function addZero(nr) {
  return nr < 10 ? `0${nr}` : nr;
}

export default function formatDate(date) {
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:00`;
}

export function norDate(date) {
  return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)} ${date.getFullYear()} ${addZero(date.getHours())}:00`;
}

export function getUTC(date) {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}
