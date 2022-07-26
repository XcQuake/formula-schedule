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
    <tr className={`table__row team_${team.constructorId}`}>
      <td className="table__cell text_center">{stats.position}</td>
      <td className="table__cell">{team.name}</td>
      <td className="table__cell text_center">{stats.points}</td>
      <td className="table__cell text_center">{stats.wins}</td>
      <td className="table__cell text_center table__cell_type_last">
        <img className="driver__flag" src={flagUrl} alt={team.nationality} />
      </td>
    </tr>
  );
};

export default Constructor;
