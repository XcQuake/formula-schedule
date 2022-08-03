/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import './DriversList.scss';
import { DriverStanding } from '../../models/ergastApiTypes';
import DriversListElement from '../DriversListElement/DriversListElement';

interface Props {
  drivers: DriverStanding[];
}

const DriversList: React.FC<Props> = ({ drivers }) => {
  const renderedStanding: React.ReactNode = (
    drivers.map(
      (driver) => (
        <DriversListElement
          key={driver.Driver.driverId}
          stats={driver}
        />
      ),
    )
  );

  return (
    <ul className="drivers-list">
      <li className="driver driver_head">
        <div className="driver__param text_center">Pos</div>
        <div className="driver__param">Name</div>
        <div className="driver__param text_center">Pts</div>
        <div className="driver__param text_center">Wins</div>
        <div className="driver__param driver__param_team">Team</div>
        <div className="driver__param text_center">Nat</div>
      </li>
      {renderedStanding}
    </ul>
  );
};

export default DriversList;
