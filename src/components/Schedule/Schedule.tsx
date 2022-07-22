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

  const renderedWeekend: React.ReactNode = (
    !loading && !error && schedule.map((race) => (
      <Weekend
        key={race.date}
        race={race}
      />
    ))
  );

  return (
    <section className="schedule">
      {/* <h3 className="schedule__header">Schedule</h3> */}
      {loading && <Preloader />}
      <ul className="schedule__list">{renderedWeekend}</ul>
      <WeekendInfo />
    </section>
  );
};

export default React.memo(Schedule);
