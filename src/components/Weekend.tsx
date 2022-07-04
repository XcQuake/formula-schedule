import '../styles/components/Weekend.scss';
import React, { EffectCallback, useEffect } from 'react';
import { isSameWeek, parseISO } from 'date-fns';
import { refactorDate } from '../utils/utils';
import { RaceData } from '../models/apiTypes';
import Session from './Session';

type WeekendArgs = {
  onClick: (index: number) => void;
  race: RaceData;
  isActive: boolean;
  index: number;
}

function Weekend({ race, onClick, isActive, index }: WeekendArgs): JSX.Element {
  const {
    FirstPractice,
    SecondPractice,
    ThirdPractice,
    Sprint,
    Qualifying,
  } = race;

  const dates = {
    race: refactorDate(race.date, race.time),
    firstPractice: refactorDate(FirstPractice.date, FirstPractice.time),
    secondPractice: refactorDate(SecondPractice.date, SecondPractice.time),
    thirdPractice: ThirdPractice && refactorDate(
      ThirdPractice.date, ThirdPractice.time,
    ),
    sprint: Sprint && refactorDate(Sprint.date, Sprint.time),
    qualifying: refactorDate(Qualifying.date, Qualifying.time),
  };

  useEffect(() => {
    const isCurrentWeekend = isSameWeek(new Date(), parseISO(race.date), {
      weekStartsOn: 1,
    });
    if (isCurrentWeekend) {
      onClick(index);
    }
  }, []);

  function handleRaceClick(): void {
    onClick(index);
  }

  function handleRaceKeyDown(e: { key: string }): void {
    if (e.key === 'Enter') {
      onClick(index);
    }
  }

  const accordionClassname = (
    isActive
      ? 'weekend__sessions weekend__sessions_active'
      : 'weekend__sessions'
  );

  const raceClassname = (
    isActive
      ? 'weekend__race weekend__race_active'
      : 'weekend__race'
  );

  return (
    <li className="weekend">
      <div
        className={raceClassname}
        role="button"
        tabIndex={0}
        onClick={handleRaceClick}
        onKeyDown={handleRaceKeyDown}
      >
        <p className="weekend__race-title">{race.raceName}</p>
        <div className="weekend__race-date">
          <p className="weekend__date">{dates.race.date}</p>
          <p className="weekend__time">{dates.race.time}</p>
        </div>
      </div>
      <ul className={accordionClassname}>
        <Session
          title="1st practice"
          date={dates.firstPractice.date}
          time={dates.firstPractice.time}
          type="practice"
        />
        <Session
          title="2nd practice"
          date={dates.secondPractice.date}
          time={dates.secondPractice.time}
          type="practice"
        />
        {
          race.ThirdPractice && (
            <Session
              title="3rd practice"
              date={dates.thirdPractice!.date}
              time={dates.thirdPractice!.time}
              type="practice"
            />
          )
        }
        {
          race.Sprint && (
            <Session
              title="Sprint"
              date={dates.sprint!.date}
              time={dates.sprint!.time}
              type="sprint"
            />
          )
        }
        <Session
          title="Qualifying"
          date={dates.qualifying.date}
          time={dates.qualifying.time}
          type="qualifying"
        />
      </ul>
    </li>
  );
}

export default React.memo(Weekend);
