/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import './DriversStanding.scss';
import { DriverStanding } from '../../models/apiTypes';
import Driver from '../Driver/Driver';
import Table from '../Table/Table';

interface props {
  drivers: DriverStanding[];
}

const DriversStanding: React.FC<props> = ({ drivers }) => {
  const standingList: React.ReactNode = (
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
    <Table list={standingList}>
      <tr className="table__row">
        <th className="table__cell">Pos</th>
        <th className="table__cell text_left">Name</th>
        <th className="table__cell">Pts</th>
        <th className="table__cell">Wins</th>
        <th className="table__cell text_left table__cell_type_team">Team</th>
        <th className="table__cell table__cell_type_nationality">Nat</th>
      </tr>
    </Table>
  );
};

export default DriversStanding;
