import { parseISO, format } from 'date-fns';
import { Race } from '../models/formulaApiTypes';

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

export function refactorWeekendDates(weekend: Race): any {
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
