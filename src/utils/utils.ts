import { parseISO, format } from 'date-fns';
import { Race } from '../models/ergastApiTypes';

type refactoredDate = {
  date: string,
  time: string,
}

export function refactorDate(date: string, time: string): refactoredDate {
  return {
    date: format(parseISO(`${date} ${time}`), 'd MMM'),
    time: format(parseISO(`${date} ${time}`), 'HH:mm'),
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function refactorWeekendDates(weekend: Race) {
  return {
    race: refactorDate(weekend.date, weekend.time),
    firstPractice: refactorDate(
      weekend.FirstPractice.date,
      weekend.FirstPractice.time,
    ),
    secondPractice: refactorDate(
      weekend.SecondPractice.date,
      weekend.SecondPractice.time,
    ),
    thirdPractice: weekend.ThirdPractice && refactorDate(
      weekend.ThirdPractice?.date,
      weekend.ThirdPractice?.time,
    ),
    sprint: weekend.Sprint && refactorDate(
      weekend.Sprint.date,
      weekend.Sprint.time,
    ),
    qualifying: refactorDate(
      weekend.Qualifying.date,
      weekend.Qualifying.time,
    ),
  };
}

export function normalizeString(string: string): string {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function getSeasons(currentYear: number): {name: string, value: string}[] {
  const seasons = [];
  for (let i = 2020; i <= currentYear; i += 1) {
    seasons.unshift({
      name: `${i}`,
      value: `${i}`,
    });
  }
  return seasons;
}

export function loadImageAsync(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = function () {
      resolve(url);
    };
  });
}
