import React, { useState, useContext, ReactElement } from 'react';
import uniqid from 'uniqid';
import Weekend from './Weekend';
import {
  CurrentSeasonContext,
  ICurrentSeasonContext,
} from '../contexts/CurrentSeasonContext';

export default function Schedule(): ReactElement {
  const currentSeason: (
    ICurrentSeasonContext | null
  ) = useContext(CurrentSeasonContext);
  const [isRaceOpened, setIsRaceOpened] = useState<number | null>(null);

  function handleOpenRace(index: number): void {
    return index === isRaceOpened ? setIsRaceOpened(null) : setIsRaceOpened(index);
  }

  return (
    <section className="schedule">
      <ul className="schedule__list">
        {currentSeason && currentSeason.races.map(
          (race, index) => (
            <Weekend
              key={uniqid()}
              onClick={() => handleOpenRace(index)}
              isClicked={isRaceOpened === index}
              race={race}
            />
          ),
        )}
      </ul>
    </section>
  );
}
