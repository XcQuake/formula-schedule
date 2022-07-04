import '../styles/components/Driver.scss';
import React from 'react';
import { DriverStandingData } from '../models/apiTypes';

type DriverData = {
  stats: DriverStandingData;
  flag: string;
};

export default function Driver({ stats, flag }: DriverData): JSX.Element {
  const bio = stats.Driver;
  const team = stats.Constructors[0];

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
          <img className="driver__flag" src={flag} alt={bio.nationality} />
        </li>
      </ul>
    </li>
  );
}
