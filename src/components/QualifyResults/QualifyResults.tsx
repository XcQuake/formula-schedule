import React from 'react';

import { QualifyingResult } from '../../models/ergastApiTypes';
import QualifyResultsElement from './QualifyResultsElement';

interface Props {
  results: QualifyingResult[],
}

const RaceResults: React.FC<Props> = ({ results }) => {
  const renderedResults: React.ReactNode = (
    results.map((result) => (
      <QualifyResultsElement key={result.position} element={result} />
    ))
  );

  return (
    <ul className="results-list">
      <li className="qualify-result result_head">
        <div className="result__param text_center">Pos</div>
        <div className="result__param text_center">Name</div>
        <div className="result__param text_center">Q1</div>
        <div className="result__param text_center">Q2</div>
        <div className="result__param text_center">Q3</div>
      </li>
      {renderedResults}
    </ul>
  );
};

export default RaceResults;
