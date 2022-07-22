/* eslint-disable max-len */
export function getImage(wikiTitle: string): Promise<string> {
  return fetch(
    `https://en.wikipedia.org/w/api.php?origin=*&action=query&redirects&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=${wikiTitle}`, {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((res) => res.json())
    .then((res) => res.query.pages[0].thumbnail.source);
}
