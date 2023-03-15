import React from 'react';

import './ConstructorsList.scss';
import ConstructorsListElement
  from '../ConstructorsListElement/ConstructorsListElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ConstructorsList: React.FC = () => {
  const { standingList } = useTypedSelector((state) => state.standing);

  const renderedStanding: React.ReactNode = (
    standingList && standingList.ConstructorStandings?.map((constructor) => (
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
