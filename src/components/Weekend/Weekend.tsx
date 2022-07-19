import React, { useEffect } from 'react';
import { isPast, isSameWeek, parseISO } from 'date-fns';

import './Weekend.scss';
import { refactorDate } from '../../utils/utils';
import { Race } from '../../models/apiTypes';
import * as circuits from '../../utils/circuits';
import Session from '../Session/Session';

type WeekendArgs = {
  onClick: (index: number) => void;
  race: Race;
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

  const raceName = race.raceName.replace('Grand Prix', '');

  const isCurrentWeekend = isSameWeek(new Date(), parseISO(race.date), {
    weekStartsOn: 1,
  });

  useEffect(() => {
    if (isCurrentWeekend) {
      onClick(index);
    }
  }, []);

  const isWeekendOver = isPast(parseISO(race.date));

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

  const circuitName = race.raceName.split(' ')[0].toLowerCase();

  return (
    <li className="weekend">
      <div
        className={raceClassname}
        role="button"
        tabIndex={0}
        onClick={() => onClick(index)}
        onKeyDown={() => onClick(index)}
      >
        <img
          className="weekend__race-image"
          src={circuits[circuitName as keyof typeof circuits]}
          alt={race.Circuit.circuitName}
        />
        <div className="weekend__race-info">
          <div className="weekend__race-header">
            <p className="weekend__race-title">{raceName}</p>
            <p className="weekend__race-subtitle">Grand prix</p>
          </div>
          {
            isWeekendOver
              ? <p className="weekend__race-finished">Finished</p>
              : (
                <div className="weekend__race-date">
                  <p className="weekend__date">{dates.race.date}</p>
                  <p className="weekend__time">{dates.race.time}</p>
                </div>
              )
          }
          {/* {isWeekendOver && <div className="weekend__race-over" /> } */}
        </div>
      </div>
      {/* <ul className={accordionClassname}>
        <Session
          title="FP1"
          date={dates.firstPractice.date}
          time={dates.firstPractice.time}
          type="practice"
        />
        <Session
          title="FP2"
          date={dates.secondPractice.date}
          time={dates.secondPractice.time}
          type="practice"
        />
        {
          race.ThirdPractice && (
            <Session
              title="FP3"
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
          title="QU"
          date={dates.qualifying.date}
          time={dates.qualifying.time}
          type="qualifying"
        />
      </ul> */}
    </li>
  );
}

export default React.memo(Weekend);
