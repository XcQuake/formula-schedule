import { ApiData } from '../models/apiTypes';

interface ApiConfig {
  baseUrl: string,
  headers: {
    'Content-Type': string
  }
}

class Api {
  private link: string;

  private headers: object;

  constructor({ baseUrl, headers }: ApiConfig) {
    this.link = baseUrl;
    this.headers = headers;
  }

  private static processResult(res: Response):
  Promise<{ MRData: ApiData }> {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getDriverStanding(): object {
    return fetch(`${this.link}/current/driverStandings.json`, {
      method: 'GET',
    })
      .then((res: Response) => Api.processResult(res))
      .then((data) => data.MRData.StandingsTable!.StandingsLists);
  }

  getSchedule(): object {
    return fetch(`${this.link}/current.json`, {
      method: 'GET',
    })
      .then((res: Response) => Api.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races);
  }
}

const api = new Api({
  baseUrl: 'http://ergast.com/api/f1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
