import React from 'react';

import QualifyResultsElement from './QualifyResultsElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Placeholder from '../Placeholder/Placeholder';

const RaceResults: React.FC = () => {
  const {
    loading,
    qualifyResult,
  } = useTypedSelector((state) => state.result);

  const renderedResults: React.ReactNode = (
    !loading && qualifyResult ? qualifyResult.map((result) => (
      <QualifyResultsElement key={result.position} element={result} />
    )) : Array(20).fill('').map(() => (
      <Placeholder.Rect
        key={Math.random()}
        height="20px"
        style={{ borderRadius: '3px 3px 15px 3px' }}
      />
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
