import {
  MRData,
  Race,
  Result,
  Season,
  QualifyingResult,
  DriverStanding,
  ConstructorStanding } from '../models/ergastApiTypes';
import { ERGAST_API_URL } from '../utils/constants';

interface ApiConfig {
  baseUrl: string,
  headers: {
    'Content-Type': string
  }
}

class ErgastApi {
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

  getDriverStanding(season: string): Promise<DriverStanding[]> {
    return fetch(`${this.link}/${season}/driverStandings.json`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.StandingsTable!.StandingsLists[0].DriverStandings!);
  }

  getConstructorStanding(season: string): Promise<ConstructorStanding[]> {
    return fetch(`${this.link}/${season}/constructorStandings.json`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.StandingsTable!.StandingsLists[0].ConstructorStandings!);
  }

  getSchedule(): Promise<Race[]> {
    return fetch(`${this.link}/current.json`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races);
  }

  getRaceResult(season: string, round: string): Promise<Result[]> {
    return fetch(`${this.link}/${season}/${round}/results.json`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races[0].Results!);
  }

  getQualifyResult(season: string, round: string): Promise<QualifyingResult[]> {
    return fetch(`${this.link}/${season}/${round}/qualifying.json`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.RaceTable!.Races[0].QualifyingResults!);
  }

  getSeasons(): Promise<Season[]> {
    return fetch(`${this.link}/seasons.json?limit=30&offset=70`, {
      method: 'GET',
    })
      .then((res: Response) => ErgastApi.processResult(res))
      .then((data) => data.MRData.SeasonTable!.Seasons);
  }
}

const ergastApi = new ErgastApi({
  baseUrl: ERGAST_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ergastApi;
