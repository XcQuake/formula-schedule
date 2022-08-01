/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriversListElement.scss';
import { useActions } from '../../hooks/useActions';
import { DriverStanding } from '../../models/ergastApiTypes';

type DriverData = {
  stats: DriverStanding;
};

function DriversListElement({ stats }: DriverData): JSX.Element {
  const { selectDriver } = useActions();

  const bio = stats.Driver;
  const team = stats.Constructors[0];
  const flagUrl = findFlagUrlByNationality(bio.nationality);

  function handleClick(): void {
    console.log(stats.Driver);
    selectDriver(stats.Driver.driverId);
  }

  return (
    <div
      className={`driver team_${team.constructorId}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
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
    </div>
  );
}

export default DriversListElement;
