import React, { useState, useContext, ReactElement } from 'react';
import uniqid from 'uniqid';
import Weekend from './Weekend';
import {
  CurrentSeasonContext,
  ICurrentSeasonContext,
} from '../contexts/CurrentSeasonContext';

export default function Schedule(): JSX.Element {
  const currentSeason: ICurrentSeasonContext | null = useContext(
    CurrentSeasonContext,
  );
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedWeekend: React.ReactNode = currentSeason?.races.map(
    (race, index) => {
      const toggleRace = index === activeIndex
        ? { maxHeight: '80px', marginBottom: '10px', opacity: '1' }
        : { maxHeight: '0', opacity: '0' };

      return (
        <Weekend
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
