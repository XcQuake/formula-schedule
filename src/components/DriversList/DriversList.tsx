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
      <ul className="driver__params driver__params_head">
        <li className="driver__param text_center">Pos</li>
        <li className="driver__param">Name</li>
        <li className="driver__param text_center">Pts</li>
        <li className="driver__param text_center">Wins</li>
        <li className="driver__param">Team</li>
        <li className="driver__param text_center">Nationality</li>
      </ul>
      {renderedStanding}
    </ul>
  );
};

export default DriversList;
