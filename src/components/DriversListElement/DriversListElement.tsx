import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriversListElement.scss';
import { DriverStanding } from '../../models/ergastApiTypes';

type DriverData = {
  stats: DriverStanding;
};

function DriversListElement({ stats }: DriverData): JSX.Element {
  const bio = stats.Driver;
  const team = stats.Constructors[0];
  const flagUrl = findFlagUrlByNationality(bio.nationality);
  console.log(stats);
  return (
    <li className={`driver team_${team.constructorId}`}>
      <div className="driver__param text_center">{stats.position}</div>
      <div className="driver__param">
        {`${bio.givenName} ${bio.familyName}`}
      </div>
      <div className="driver__param text_center">{stats.points}</div>
      <div className="driver__param text_center">{stats.wins}</div>
      <div className="driver__param driver__param_team">{team.name}</div>
      <div className="driver__param text_center">
        <img className="driver__flag" src={flagUrl} alt={bio.nationality} />
      </div>
    </li>
  );
}

export default DriversListElement;
