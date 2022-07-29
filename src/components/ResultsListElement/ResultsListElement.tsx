import React from 'react';
import { Result } from '../../models/formulaApiTypes';

import './ResultsListElement.scss';

interface Props {
  element: Result;
}

const ResultsListElement: React.FC<Props> = ({ element }) => {
  const time = (): string => {
    if (element.position === '1') {
      return `LAP ${element.laps}`;
    }
    if (!element.Time) {
      return `LAP ${element.laps}`;
    }
    return element.Time.time;
  };

  return (
    <li className={`result team_${element.Constructor.constructorId}`}>
      <div className="result__param text_center">{element.position}</div>
      <div className="result__param text_center">{element.Driver.code}</div>
      <div className="result__param text_center">{element.points}</div>
      <div className="result__param text_center">{time()}</div>
    </li>
  );
};

export default ResultsListElement;