import React, { KeyboardEventHandler, ReactElement } from 'react';
import { RaceData } from '../models/apiTypes';

type WeekendArgs = {
  onClick: () => void;
  isClicked: boolean;
  race: RaceData;
}

export default function Weekend(
  { onClick, isClicked, race }: WeekendArgs,
): ReactElement {
  const accordionClassname = `weekend__accordion ${
    isClicked ? 'weekend__accordion_opened' : ''
  }`;

  function handleRaceClick(): void {
    return onClick();
  }

  // eslint-disable-next-line consistent-return
  function handleRaceKeyDown(e: { key: string}): void {
    if (e.key === 'Enter') {
      return onClick();
    }
  }

  return (
    <li className="weekend">
      <div
        className="weekend__race"
        role="button"
        tabIndex={0}
        onClick={handleRaceClick}
        onKeyDown={handleRaceKeyDown}
      >
        <p className="weekend__race-title">{race.raceName}</p>
        <div className="weekend__race-date">
          <p className="weekend__date">{race.date}</p>
          <p className="weekend__time">{race.time}</p>
        </div>
      </div>
      <ul className={accordionClassname}>
        <li className="weekend__practice">
          <p className="weekend__practice-title">1st practice</p>
          <p className="weekend__date">{race.FirstPractice.date}</p>
          <p className="weekend__time">{race.FirstPractice.time}</p>
        </li>
        <li className="weekend__practice">
          <p className="weekend__practice-title">2nd practice</p>
          <p className="weekend__date">{race.SecondPractice.date}</p>
          <p className="weekend__time">{race.SecondPractice.time}</p>
        </li>
        {/* <li className="weekend__practice">
          <p className="weekend__practice-title">3rd practice</p>
          <p className="weekend__date">{race.ThirdPractice.date}</p>
          <p className="weekend__time">{race.ThirdPractice.time}</p>
        </li> */}
        <li className="weekend__qualifying">
          <p className="weekend__practice-title">Qualifying</p>
          <p className="weekend__date">{race.Qualifying.date}</p>
          <p className="weekend__time">{race.Qualifying.time}</p>
        </li>
      </ul>
    </li>
  );
}
