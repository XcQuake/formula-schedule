import React from 'react';

import './RaceResultsElement.scss';
import { Result } from '../../models/ergastApiTypes';

interface Props {
  element: Result;
}

const RaceResultsElement: React.FC<Props> = ({ element }) => {
  const time = (): string => {
    if (element.position === '1' || !element.Time) {
      return `LAP ${element.laps}`;
    }
    return element.Time.time;
  };

  return (
    <li className={`race-result team_${element.Constructor.constructorId}`}>
      <div className="result__param text_center">{element.position}</div>
      <div className="result__param text_center">{element.Driver.code}</div>
      <div className="result__param text_center">{element.points}</div>
      <div className="result__param text_center">{element.status}</div>
      <div className="result__param text_center">{time()}</div>
    </li>
  );
};

export default RaceResultsElement;
