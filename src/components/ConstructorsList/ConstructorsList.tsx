import React from 'react';

import './ConstructorsList.scss';
import ConstructorsListElement
  from '../ConstructorsListElement/ConstructorsListElement';
import { ConstructorStanding } from '../../models/formulaApiTypes';

interface props {
  constructors: ConstructorStanding[];
}

const ConstructorsList:React.FC<props> = ({ constructors }) => {
  const renderedStanding: React.ReactNode = (
    constructors.map((constructor) => (
      <ConstructorsListElement
        key={constructor.Constructor.constructorId}
        stats={constructor}
      />
    ))
  );

  return (
    <ul className="constructors-list">
      <li className="constructor">
        <div className="constructor__param text_center">Pos</div>
        <div className="constructor__param">Team</div>
        <div className="constructor__param text_center">Pts</div>
        <div className="constructor__param text_center">Wins</div>
        <div className="constructor__param text_center">Nat</div>
      </li>
      {renderedStanding}
    </ul>
  );
};

export default ConstructorsList;
