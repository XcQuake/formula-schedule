import '../styles/components/Schedule.scss';
import React, { useState, useContext } from 'react';
import Weekend from './Weekend';
import {
  CurrentSeasonContext,
  ICurrentSeasonContext,
} from '../contexts/CurrentSeasonContext';
import { refactorDate } from '../utils/utils';

export default function Schedule(): JSX.Element {
  const currentSeason:
    ICurrentSeasonContext | null = useContext(CurrentSeasonContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedWeekend: React.ReactNode = currentSeason?.races.map(
    (race, index) => {
      const toggleRace = index === activeIndex
        ? { maxHeight: '80px', marginBottom: '10px', opacity: '1' }
        : { maxHeight: '0', opacity: '0' };
      // if (race.date)
      return (
        <Weekend
          key={race.date}
          race={race}
          toggleRace={toggleRace}
          onClick={() => setActiveIndex(index)}
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
