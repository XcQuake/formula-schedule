import './Schedule.scss';
import React, { useState, useCallback, useEffect, FunctionComponent } from 'react';
import Weekend from '../Weekend/Weekend';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Preloader from '../Preloader/Preloader';

const Schedule: React.FC = () => {
  const { fetchSchedule } = useActions();
  const { loading, error, schedule } = useTypedSelector(
    (state) => state.schedule,
  );
  const [activeIndex, setActiveIndex] = useState(999);

  const onClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const renderedWeekend: React.ReactNode = (
    !loading && !error && schedule.map((race, index) => {
      const isActive = index === activeIndex;
      return (
        <Weekend
          key={race.date}
          race={race}
          isActive={isActive}
          onClick={onClick}
          index={index}
        />
      );
    })
  );

  return (
    <section className="schedule">
      <h3 className="schedule__header">Schedule</h3>
      {loading && <Preloader />}
      <ul className="schedule__list">{renderedWeekend}</ul>
    </section>
  );
};

export default React.memo(Schedule);
