import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../utils/constants';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Placeholder from '../Placeholder/Placeholder';
import Weekend from '../Weekend/Weekend';
import WeekendInfo from '../WeekendInfo/WeekendInfo';
import './Schedule.scss';

const Schedule: React.FC = () => {
  const { fetchSchedule } = useActions();
  const { loading, error, schedule } = useTypedSelector(
    (state) => state.schedule,
  );
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    if (schedule.length === 0) fetchSchedule();
  }, []);

  const weekendList: React.ReactNode = (
    <ul className="schedule__list">
      {schedule.map((race) => (
        <Weekend key={race.date} race={race} />
      ))}
    </ul>
  );

  const listPlaceholder: React.ReactNode = (
    <ul className="schedule__list">
      {Array(23).fill('').map(
        () => (
          <Placeholder.Rect
            key={Math.random()}
            height="180px"
            style={{ borderRadius: '10px' }}
          />
        ),
      )}
    </ul>
  );

  return (
    <section className="schedule">
      <div className="schedule__wrapper">
        {loading && listPlaceholder}
        {!loading && !error && weekendList}
        {error && <ErrorMessage />}
      </div>
      {windowWidth > BREAKPOINTS.mobile && <WeekendInfo />}
    </section>
  );
};

export default React.memo(Schedule);
