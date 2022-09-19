import React, { useEffect } from 'react';
import { isPast, isSameWeek, parseISO, addHours } from 'date-fns';
import { useHistory } from 'react-router-dom';

import './Weekend.scss';
import { refactorDate } from '../../utils/utils';
import { Race } from '../../models/ergastApiTypes';
import * as circuits from '../../utils/circuits';
import { useActions } from '../../hooks/useActions';
import WeekendInfo from '../WeekendInfo/WeekendInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS, URLS } from '../../utils/constants';

interface Props {
  race: Race;
}

const Weekend: React.FC<Props> = ({ race }) => {
  const { selectWeekend, transferContent } = useActions();
  const { windowWidth } = useWindowWidth();
  const rawDate = `${race.date}T${race.time}`;
  const history = useHistory();

  const weekendInfo = {
    name: race.raceName.replace('Grand Prix', ''),
    date: refactorDate(race.date, race.time),
    isCurrent: isSameWeek(new Date(), parseISO(rawDate), { weekStartsOn: 1 }),
    isOver: isPast(addHours(parseISO(rawDate), 3)),
    circuitName: race.raceName.split(' ')[0].toLowerCase(),
  };

  useEffect(() => {
    if (weekendInfo.isCurrent) {
      selectWeekend(race);
    }
  }, []);

  const onClick = (): void => {
    selectWeekend(race);
    if (windowWidth < BREAKPOINTS.mobile) {
      transferContent(<WeekendInfo />);
      history.push(URLS.stats);
    }
  };

  return (
    <li
      className="weekend"
      role="button"
      tabIndex={0}
      onClick={() => onClick()}
      onKeyUp={() => onClick()}
    >
      <img
        className="weekend__image"
        src={circuits[weekendInfo.circuitName as keyof typeof circuits]}
        alt={race.Circuit.circuitName}
      />
      <div className="weekend__info">
        <div className="weekend__header">
          <p className="weekend__title">{weekendInfo.name}</p>
          <p className="weekend__subtitle">Grand prix</p>
        </div>
        {
          weekendInfo.isOver
            ? <p className="weekend__finished">Finished</p>
            : (
              <div className="weekend__date-info">
                <p className="weekend__date">{weekendInfo.date.date}</p>
                <p className="weekend__time">{weekendInfo.date.time}</p>
              </div>
            )
        }
      </div>
    </li>
  );
};

export default React.memo(Weekend);
