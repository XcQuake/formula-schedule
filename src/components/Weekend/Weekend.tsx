import React, { useEffect, useState } from 'react';
import { isPast, isSameWeek, parseISO, addHours } from 'date-fns';

import './Weekend.scss';
import { refactorDate } from '../../utils/utils';
import { Race } from '../../models/ergastApiTypes';
import * as circuits from '../../utils/circuits';
import { useActions } from '../../hooks/useActions';
import WeekendInfo from '../WeekendInfo/WeekendInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';

interface Props {
  race: Race;
}

const Weekend: React.FC<Props> = ({ race }) => {
  const { selectWeekend, openPopup } = useActions();
  const { windowWidth } = useWindowWidth();
  const rawDate = `${race.date}T${race.time}`;

  const weekendInfo = {
    name: race.raceName.replace('Grand Prix', ''),
    date: refactorDate(race.date, race.time),
    rawDate: `${race.date}T${race.time}`,
    isCurrent: isSameWeek(new Date(), parseISO(rawDate), { weekStartsOn: 1 }),
    isOver: isPast(addHours(parseISO(rawDate), 3)),
    circuit: race.raceName.split(' ')[0].toLowerCase(),
  };

  useEffect(() => {
    if (weekendInfo.isCurrent) {
      selectWeekend(race);
    }
  }, []);

  const onClick = (): void => {
    selectWeekend(race);
    if (windowWidth < 699) {
      openPopup(<WeekendInfo />);
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
          src={circuits[weekendInfo.circuit as keyof typeof circuits]}
          alt={race.Circuit.circuitName}
        />
        <div className="weekend__race-info">
          <div className="weekend__race-header">
            <p className="weekend__race-title">{weekendInfo.name}</p>
            <p className="weekend__race-subtitle">Grand prix</p>
          </div>
          {
            weekendInfo.isOver
              ? <p className="weekend__race-finished">Finished</p>
              : (
                <div className="weekend__race-date">
                  <p className="weekend__date">{weekendInfo.date.date}</p>
                  <p className="weekend__time">{weekendInfo.date.time}</p>
                </div>
              )
          }
        </div>
      </div>
    </li>
  );
};

export default React.memo(Weekend);
