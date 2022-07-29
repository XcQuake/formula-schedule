import { MRData, Race, StandingList, Result } from '../models/formulaApiTypes';
import { FORMULA_API_URL } from '../utils/constants';

interface ApiConfig {
  baseUrl: string,
  headers: {
    'Content-Type': string
  }
}

class FormulaApi {
  private link: string;

  private headers: {
    'Content-Type': string,
  };

  constructor({ baseUrl, headers }: ApiConfig) {
    this.link = baseUrl;
    this.headers = headers;
  }

  private static processResult = (res: Response):
  Promise<{ MRData: MRData }> => {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  };

  getStanding(season: string, championship: string): Promise<StandingList> {
    return fetch(`${this.link}/${season}/${championship}Standings.json`, {
      method: 'GET',
    })
      .then((res: Response) => FormulaApi.processResult(res))
      .then((data) => data.MRData.StandingsTable!.StandingsLists[0]);
  }

  getSchedule(): Promise<Race[]> {
    return fetch(`${this.link}/current.json`, {
      method: 'GET',
    })
      .then((res: Response) => FormulaApi.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races);
  }

  getRaceResult(season: string, round: string): Promise<Result[]> {
    return fetch(`${this.link}/${season}/${round}/results.json`, {
      method: 'GET',
    })
      .then((res: Response) => FormulaApi.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races[0].Results!);
  }
}

const formulaApi = new FormulaApi({
  baseUrl: FORMULA_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default formulaApi;
