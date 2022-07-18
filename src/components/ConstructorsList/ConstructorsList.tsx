import React from 'react';

import './ConstructorsList.scss';
import Constructor from '../Constructor/Constructor';
import { ConstructorStanding } from '../../models/apiTypes';

interface props {
  constructors: ConstructorStanding[];
}

const ConstructorsList:React.FC<props> = ({ constructors }) => {
  const renderedStanding: React.ReactNode = (
    constructors.map((constructor) => (
      <Constructor
        stats={constructor}
      />
    ))
  );

  return (
    <ul className="constructors-list">
      <ul className="constructor__params">
        <li className="constructor__param text_center">Pos</li>
        <li className="constructor__param">Team</li>
        <li className="constructor__param text_center">Pts</li>
        <li className="constructor__param text_center">Wins</li>
        <li className="constructor__param text_center">Nationality</li>
      </ul>
      {renderedStanding}
    </ul>
  );
};

export default ConstructorsList;
