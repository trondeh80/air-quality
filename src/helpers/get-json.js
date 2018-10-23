import fetch from 'cross-fetch';
import getUrl from './get-url';

export default function getJson(path) {
  console.log('Fetching data');
  return fetch(getUrl(path))
    .then(data => data.json());
}
