import React from 'react';

import './RaceResults.scss';
import RaceResultsElement from './RaceResultsElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Placeholder from '../Placeholder/Placeholder';

const RaceResults: React.FC = () => {
  const {
    loading,
    raceResult,
  } = useTypedSelector((state) => state.result);

  const renderedResults: React.ReactNode = (
    !loading && raceResult
      ? raceResult.map((result) => (
        <RaceResultsElement key={result.position} element={result} />
      )) : Array(20).fill('').map(() => (
        <Placeholder.Rect
          key={Math.random()}
          height="20px"
        />
      ))
  );

  return (
    <ul className="results-list">
      <li className="race-result result_head">
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
