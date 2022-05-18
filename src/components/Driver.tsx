import React, { ReactElement } from 'react';
import { DriverStandingData } from '../models/apiTypes';

type DriverData = {
  stats: DriverStandingData;
  flag: string
}

export default function Driver({ stats, flag }: DriverData): ReactElement {
  const bio = stats.Driver;
  const team = stats.Constructors[0];

  const driverClassname = `driver team_${team.constructorId}`;

  return (
    <li className={driverClassname}>
      <ul className="driver__params">
        <li className="driver__param text__align_center">{stats.position}</li>
        <li className="driver__param">
          {`${bio.givenName} ${bio.familyName}`}
        </li>
        <li className="driver__param text__align_center">{stats.points}</li>
        <li className="driver__param text__align_center">{stats.wins}</li>
        <li className="driver__param">{team.name}</li>
        <li className="driver__param text__align_center">
          <img
            className="driver__flag"
            src={flag}
            alt={bio.nationality}
          />
        </li>
      </ul>
    </li>
  );
}
