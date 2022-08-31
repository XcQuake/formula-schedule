/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { findFlagUrlByNationality } from 'country-flags-svg';
import { useHistory } from 'react-router-dom';

import './DriversListElement.scss';
import { useActions } from '../../hooks/useActions';
import { DriverStanding } from '../../models/ergastApiTypes';
import DriverInfo from '../DriverInfo/DriverInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';

interface Props {
  stats: DriverStanding;
}

const DriversListElement: React.FC<Props> = ({ stats }) => {
  const { selectDriver, openPopup } = useActions();
  const { windowWidth } = useWindowWidth();
  const history = useHistory();

  const bio = stats.Driver;
  const team = stats.Constructors[0];
  const flagUrl = findFlagUrlByNationality(bio.nationality);

  function handleClick(): void {
    selectDriver(stats.Driver);
    if (windowWidth < 1199) {
      openPopup(<DriverInfo />);
      history.push('/popup');
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
