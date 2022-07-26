/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import './DriversList.scss';
import { DriverStanding } from '../../models/apiTypes';
import Driver from '../Driver/Driver';

interface props {
  drivers: DriverStanding[];
}

const DriversList: React.FC<props> = ({ drivers }) => {
  const renderedStanding: React.ReactNode = (
    drivers.map(
      (driver) => (
        <Driver
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
