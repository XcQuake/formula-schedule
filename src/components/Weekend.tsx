import '../styles/components/Weekend.scss';
import React from 'react';
import { refactorDate } from '../utils/utils';
import { RaceData } from '../models/apiTypes';
import Session from './Session';

type WeekendArgs = {
  onClick: () => void;
  race: RaceData;
  toggleRace: object;
}

function Weekend({ race, onClick, toggleRace }: WeekendArgs): JSX.Element {
  const raceTime = refactorDate(race.date, race.time);
  const firstPracticeTime = refactorDate(
    race.FirstPractice.date, race.FirstPractice.time,
  );
  const secondPracticeTime = refactorDate(
    race.SecondPractice.date, race.SecondPractice.time,
  );
  const thirdPracticeTime = race.ThirdPractice && refactorDate(
    race.ThirdPractice.date, race.ThirdPractice.time,
  );
  const sprintTime = race.Sprint && refactorDate(
    race.Sprint.date, race.Sprint.time,
  );
  const qualifyingTime = refactorDate(
    race.Qualifying.date, race.Qualifying.time,
  );

  function handleRaceClick(): void {
    onClick();
  }

  function handleRaceKeyDown(e: { key: string }): void {
    if (e.key === 'Enter') {
      onClick();
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
          <p className="weekend__date">{raceTime.date}</p>
          <p className="weekend__time">{raceTime.time}</p>
        </div>
      </div>
      <ul className="weekend__sessions" style={toggleRace}>
        <Session
          title="1st practice"
          date={firstPracticeTime.date}
          time={firstPracticeTime.time}
          type="practice"
        />
        <Session
          title="2nd practice"
          date={secondPracticeTime.date}
          time={secondPracticeTime.time}
          type="practice"
        />
        {
          race.ThirdPractice && (
            <Session
              title="3rd practice"
              date={thirdPracticeTime!.date}
              time={thirdPracticeTime!.time}
              type="practice"
            />
          )
        }
        {
          race.Sprint && (
            <Session
              title="Sprint"
              date={sprintTime!.date}
              time={sprintTime!.time}
              type="sprint"
            />
          )
        }
        <Session
          title="Qualifying"
          date={qualifyingTime.date}
          time={qualifyingTime.time}
          type="qualifying"
        />
      </ul>
    </li>
  );
}

export default React.memo(Weekend);
