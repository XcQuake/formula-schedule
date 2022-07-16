import './Schedule.scss';
import React, { useState, useContext, useCallback, useEffect } from 'react';
import Weekend from '../Weekend/Weekend';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

function Schedule(): JSX.Element {
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

  const renderedWeekend: React.ReactNode = schedule.map(
    (race, index) => {
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
    },
  );

  return (
    <section className="schedule">
      <ul className="schedule__list">{renderedWeekend}</ul>
    </section>
  );
}

export default React.memo(Schedule);
