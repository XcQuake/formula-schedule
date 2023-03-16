import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';

import { ConstructorStanding } from '../../models/ergastApiTypes';

interface Props {
  stats: ConstructorStanding;
}

const ConstructorsListElement: React.FC<Props> = ({ stats }) => {
  const team = stats.Constructor;
  const flagUrl = findFlagUrlByNationality(team.nationality);

  return (
    <li className={`constructor team_${team.constructorId}`}>
      <div className="constructor__param text_center">{stats.position}</div>
      <div className="constructor__param">{team.name}</div>
      <div className="constructor__param text_center">{stats.points}</div>
      <div className="constructor__param text_center">{stats.wins}</div>
      <div className="constructor__param text_center">
        <img className="constructor__flag" src={flagUrl} alt={team.nationality} />
      </div>
    </li>
  );
};

export default ConstructorsListElement;
