import '../styles/Weekend.scss';
import React from 'react';
import { RaceData } from '../models/apiTypes';
import WeekendActivity from './WeekendActivity';

type WeekendArgs = {
  onClick: () => void;
  race: RaceData;
  toggleRace: object;
};

function Weekend({ race, onClick, toggleRace }: WeekendArgs): JSX.Element {
  function refactorDate(date: string): string {
    return new Date(date).toLocaleDateString('ru', {
      month: 'long',
      day: 'numeric',
    });
  }

  function refactorTime(time: string): string {
    return new Date(`01-01-22 ${time}`).toLocaleTimeString('ru', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  function handleRaceClick(): void {
    onClick();
  }

  // eslint-disable-next-line consistent-return
  function handleRaceKeyDown(e: { key: string }): void {
    if (e.key === 'Enter') {
      return onClick();
    }
  }

  return (
    <li className="weekend">
      <div
        className="weekend__race"
        role="button"
        tabIndex={0}
        onClick={handleRaceClick}
        onKeyDown={handleRaceKeyDown}
      >
        <p className="weekend__race-title">{race.raceName}</p>
        <div className="weekend__race-date">
          <p className="weekend__date">{refactorDate(race.date)}</p>
          <p className="weekend__time">{refactorTime(race.time)}</p>
        </div>
      </div>
      <ul className="weekend__accordion" style={toggleRace}>
        <WeekendActivity
          title="1st practice"
          date={refactorDate(race.FirstPractice.date)}
          time={refactorTime(race.FirstPractice.time)}
          type="practice"
        />
        <WeekendActivity
          title="2nd practice"
          date={refactorDate(race.SecondPractice.date)}
          time={refactorTime(race.SecondPractice.time)}
          type="practice"
        />
        {/* <li className="weekend__practice">
          <p className="weekend__practice-title">3rd practice</p>
          <p className="weekend__date">{race.ThirdPractice.date}</p>
          <p className="weekend__time">{race.ThirdPractice.time}</p>
        </li> */}
        <WeekendActivity
          title="Qualifying"
          date={refactorDate(race.Qualifying.date)}
          time={refactorTime(race.Qualifying.time)}
          type="qualifying"
        />
      </ul>
    </li>
  );
}

export default Weekend;
