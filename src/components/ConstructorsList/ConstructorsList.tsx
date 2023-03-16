import React from 'react';

import './ConstructorsList.scss';
import ConstructorsListElement from './ConstructorsListElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Placeholder from '../Placeholder/Placeholder';

const ConstructorsList: React.FC = () => {
  const { constructors } = useTypedSelector((state) => state.standing);

  const renderedStanding: React.ReactNode = (
    constructors ? constructors.map((constructor) => (
      <ConstructorsListElement
        key={constructor.Constructor.constructorId}
        stats={constructor}
      />
    )) : Array(10).fill('').map(() => (
      <Placeholder.Rect
        key={Math.random()}
        height="30px"
        style={{ borderRadius: '3px 3px 15px 3px' }}
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
