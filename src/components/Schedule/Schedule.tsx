import './Schedule.scss';
import React, { useState, useCallback, useEffect } from 'react';
import Weekend from '../Weekend/Weekend';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';
import WeekendInfo from '../WeekendInfo/WeekendInfo';

const Schedule: React.FC = () => {
  const { fetchSchedule } = useActions();
  const { loading, error, schedule } = useTypedSelector(
    (state) => state.schedule,
  );

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
        {loading && <Preloader />}
        {!loading && !error && weekendList}
      </div>
      <WeekendInfo />
    </section>
  );
};

export default React.memo(Schedule);
