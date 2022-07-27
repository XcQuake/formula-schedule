import React, { useEffect, useState } from 'react';
import { isPast, isSameWeek, parseISO, addHours } from 'date-fns';

import './Weekend.scss';
import { refactorDate } from '../../utils/utils';
import { Race } from '../../models/apiTypes';
import * as circuits from '../../utils/circuits';
import { useActions } from '../../hooks/useActions';
import WeekendInfo from '../WeekendInfo/WeekendInfo';

type WeekendArgs = {
  race: Race;
}

function Weekend({ race }: WeekendArgs): JSX.Element {
  const { selectWeekend, openPopup } = useActions();

  const rawDate = `${race.date}T${race.time}`;

  const weekendData = {
    name: race.raceName.replace('Grand Prix', ''),
    date: refactorDate(race.date, race.time),
    isCurrent: isSameWeek(new Date(), parseISO(rawDate), { weekStartsOn: 1 }),
    isOver: isPast(addHours(parseISO(rawDate), 3)),
    circuit: race.raceName.split(' ')[0].toLowerCase(),
  };

  const [width, setWidth] = useState(window.innerWidth);

  const handleResizeWindow = (): void => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (weekendData.isCurrent) {
      selectWeekend(race);
    }
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const weekInfo = (
    <WeekendInfo />
  );

  const onClick = (): void => {
    selectWeekend(race);
    if (width < 699) {
      openPopup(weekInfo);
    }
  };

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
