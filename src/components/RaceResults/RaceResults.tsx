import React from 'react';

import './RaceResults.scss';
import { Result } from '../../models/ergastApiTypes';
import RaceResultsElement from './RaceResultsElement';

interface Props {
  results: Result[],
}

const RaceResults: React.FC<Props> = ({ results }) => {
  const renderedResults: React.ReactNode = (
    results.map((result) => (
      <RaceResultsElement key={result.position} element={result} />
    ))
  );

  return (
    <ul className="results-list">
      <li className="result result_head">
        <div className="result__param text_center">Pos</div>
        <div className="result__param text_center">Name</div>
        <div className="result__param text_center">Pts</div>
        <div className="result__param text_center">Status</div>
        <div className="result__param text_center">Time</div>
      </li>
      {renderedResults}
    </ul>
  );
};

export default RaceResults;
