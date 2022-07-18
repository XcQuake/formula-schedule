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

  return (
    <li className={`driver team_${team.constructorId}`}>
      <ul className="driver__params">
        <li className="driver__param text_center">{stats.position}</li>
        <li className="driver__param">
          {`${bio.givenName} ${bio.familyName}`}
        </li>
        <li className="driver__param text_center">{stats.points}</li>
        <li className="driver__param text_center">{stats.wins}</li>
        <li className="driver__param">{team.name}</li>
        <li className="driver__param text_center">
          <img className="driver__flag" src={flagUrl} alt={bio.nationality} />
        </li>
      </ul>
    </li>
  );
}

export default Driver;
