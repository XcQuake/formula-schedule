import './Schedule.scss';
import React, { useEffect } from 'react';
import Weekend from '../Weekend/Weekend';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';
import WeekendInfo from '../WeekendInfo/WeekendInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../utils/constants';

const Schedule: React.FC = () => {
  const { fetchSchedule } = useActions();
  const { loading, error, schedule } = useTypedSelector(
    (state) => state.schedule,
  );
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    fetchSchedule();
  }, []);

  const weekendList: React.ReactNode = (
    <ul className="schedule__list">
      {
        schedule.map((race) => (
          <Weekend
            key={race.date}
            race={race}
          />
        ))
      }
    </ul>
  );

  return (
    <section className="schedule">
      <div className="schedule__wrapper">
        {
          loading
          && <Preloader />
        }
        {
          !loading
          && !error
          && weekendList
        }
      </div>
      {(windowWidth > BREAKPOINTS.mobile) && <WeekendInfo />}
    </section>
  );
};

export default React.memo(Schedule);
