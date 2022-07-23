/* eslint-disable max-len */
import { WikiResponse } from '../models/wikiApiTypes';

const processResult = (res: Response): Promise<WikiResponse> => {
  if (res.ok) return res.json();
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export function getImage(wikiTitle: string): Promise<string> {
  return fetch(
    `https://en.wikipedia.org/w/api.php?origin=*&action=query&redirects&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=${wikiTitle}`, {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((res) => processResult(res))
    .then((res) => res.query.pages[0].thumbnail.source);
}
