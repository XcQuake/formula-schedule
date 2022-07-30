import { RapidApiResponse, RapidDriver } from '../models/rapidApiTypes';
import { RAPID_API_URL, RAPID_API_KEY, RAPID_API_HOST } from '../utils/constants';

interface ApiConfig {
  baseUrl: string,
  headers: {
    'Content-Type': string,
    'x-rapidapi-key': string,
    'x-rapidapi-host': string,
  }
}

class RapidApi {
  private link: string;

  private headers: {
    'Content-Type': string,
    'x-rapidapi-key': string,
    'x-rapidapi-host': string,
  };

  constructor({ baseUrl, headers }: ApiConfig) {
    this.link = baseUrl;
    this.headers = headers;
  }

  private static processResult = (res: Response):
    Promise<{ response: RapidApiResponse }> => {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  };

  getDriverInfo(driverCode: string): Promise<RapidDriver> {
    return fetch(`${this.link}/drivers?search=${driverCode}`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res: Response) => RapidApi.processResult(res))
      .then((data) => data.response.response[0]);
  }
}

const rapidApi = new RapidApi({
  baseUrl: RAPID_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': RAPID_API_HOST,
  },
});

export default rapidApi;
