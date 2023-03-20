/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';
import { useNavigate } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { DriverStanding } from '../../models/ergastApiTypes';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { URLS } from '../../utils/constants';
import { normalizeString } from '../../utils/utils';

interface Props {
  stats: DriverStanding;
}

const DriversListElement: React.FC<Props> = ({ stats }) => {
  const { selectDriver } = useActions();
  const { windowWidth } = useWindowWidth();
  const navigate = useNavigate();

  const bio = stats.Driver;
  const team = stats.Constructors[0];
  const flagUrl = findFlagUrlByNationality(bio.nationality);
  const driverId = normalizeString(
    `${bio.givenName} ${bio.familyName}`,
  ).toLowerCase();

  function handleClick(): void {
    selectDriver(stats.Driver);
    if (windowWidth < 1199) {
      navigate(`${URLS.stats}/driver/${driverId}`);
    }
  }

  return (
    <div
      className={`driver team_${team.constructorId}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleClick}
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
};

export default DriversListElement;
