import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './Driver.scss';
import { DriverStanding } from '../../models/apiTypes';

type DriverData = {
  stats: DriverStanding;
};

function Driver({ stats }: DriverData): JSX.Element {
  const bio = stats.Driver;
  const team = stats.Constructors[0];
  const flagUrl = findFlagUrlByNationality(bio.nationality);
  console.log(stats);

  return (
    <tr className={`table__row team_${team.constructorId}`}>
      <td className="table__cell text_center">{stats.position}</td>
      <td className="table__cell">
        {`${bio.givenName} ${bio.familyName}`}
      </td>
      <td className="table__cell text_center">{stats.points}</td>
      <td className="table__cell text_center">{stats.wins}</td>
      <td className="table__cell">{team.name}</td>
      <td className="table__cell text_center table__cell_last">
        <img className="driver__flag" src={flagUrl} alt={bio.nationality} />
      </td>
    </tr>
  );
}

export default Driver;
