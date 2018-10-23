import { API_URL } from '../constants';

export default function getUrl(path) {
  return `${API_URL}${path}`;
}
