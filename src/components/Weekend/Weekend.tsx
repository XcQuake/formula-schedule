import React, { useEffect } from 'react';
import { isPast, isSameWeek, parseISO } from 'date-fns';

import './Weekend.scss';
import { refactorDate } from '../../utils/utils';
import { Race } from '../../models/apiTypes';
import * as circuits from '../../utils/circuits';
import { useActions } from '../../hooks/useActions';

type WeekendArgs = {
  race: Race;
}

function Weekend({ race }: WeekendArgs): JSX.Element {
  const { selectWeekend } = useActions();

  const weekendData = {
    name: race.raceName.replace('Grand Prix', ''),
    date: refactorDate(race.date, race.time),
    isCurrent: isSameWeek(new Date(), parseISO(race.date), { weekStartsOn: 1 }),
    isOver: isPast(parseISO(race.date)),
    circuit: race.raceName.split(' ')[0].toLowerCase(),
  };

  useEffect(() => {
    if (weekendData.isCurrent) {
      selectWeekend(race);
    }
  }, []);

  const onClick = (): void => {
    selectWeekend(race);
  };

  // const raceClassname = (
  //   isActive
  //     ? 'weekend__race weekend__race_active'
  //     : 'weekend__race'
  // );

  return (
    <li className="weekend">
      <div
        className="weekend__race"
        role="button"
        tabIndex={0}
        onClick={() => onClick()}
        onKeyDown={() => onClick()}
      >
        <img
          className="weekend__race-image"
          src={circuits[weekendData.circuit as keyof typeof circuits]}
          alt={race.Circuit.circuitName}
        />
        <div className="weekend__race-info">
          <div className="weekend__race-header">
            <p className="weekend__race-title">{weekendData.name}</p>
            <p className="weekend__race-subtitle">Grand prix</p>
          </div>
          {
            weekendData.isOver
              ? <p className="weekend__race-finished">Finished</p>
              : (
                <div className="weekend__race-date">
                  <p className="weekend__date">{weekendData.date.date}</p>
                  <p className="weekend__time">{weekendData.date.time}</p>
                </div>
              )
          }
        </div>
      </div>
    </li>
  );
}

export default React.memo(Weekend);
