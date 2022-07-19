import { parseISO, format } from 'date-fns';

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

export function con(): string {
  return '';
}
