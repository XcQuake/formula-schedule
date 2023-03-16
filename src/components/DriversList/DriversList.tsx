import React from 'react';

import './DriversList.scss';
import DriversListElement from './DriversListElement';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Placeholder from '../Placeholder/Placeholder';

const DriversList: React.FC = () => {
  const { drivers } = useTypedSelector((state) => state.standing);

  const renderedStanding: React.ReactNode = (
    drivers ? drivers.map(
      (driver) => (
        <DriversListElement
          key={driver.Driver.driverId}
          stats={driver}
        />
      ),
    ) : Array(20).fill('').map(() => (
      <Placeholder.Rect
        key={Math.random()}
        height="30px"
        style={{ borderRadius: '3px 3px 15px 3px' }}
      />
    ))
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
