import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './Constructor.scss';
import { ConstructorStanding } from '../../models/apiTypes';

interface props {
  stats: ConstructorStanding;
}

const Constructor: React.FC<props> = ({ stats }) => {
  const team = stats.Constructor;
  const flagUrl = findFlagUrlByNationality(team.nationality);

  return (
    <li className={`constructor team_${team.constructorId}`}>
      <ul className="constructor__params">
        <li className="constructor__param text_center">{stats.position}</li>
        <li className="constructor__param">{team.name}</li>
        <li className="constructor__param text_center">{stats.points}</li>
        <li className="constructor__param text_center">{stats.wins}</li>
        <li className="constructor__param text_center">
          <img className="constructor__flag" src={flagUrl} alt={team.nationality} />
        </li>
      </ul>
    </li>
  );
};

export default Constructor;
