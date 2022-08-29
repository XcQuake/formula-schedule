import React from 'react';

import './QualifyResultsElement.scss';
import { QualifyingResult } from '../../models/ergastApiTypes';

interface Props {
  element: QualifyingResult;
}

const RaceResultsElement: React.FC<Props> = ({ element }) => {
  const foo = 'foo';

  return (
    <li className={`qualify-result team_${element.Constructor.constructorId}`}>
      <div className="result__param text_center">{element.position}</div>
      <div className="result__param text_center">{element.Driver.code}</div>
      <div className="result__param text_center">{element.Q1 || '-'}</div>
      <div className="result__param text_center">{element.Q2 || '-'}</div>
      <div className="result__param text_center">{element.Q3 || '-'}</div>
    </li>
  );
};

export default RaceResultsElement;
