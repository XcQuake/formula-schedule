import React from 'react';

import './ConstructorsStanding.scss';
import Constructor from '../Constructor/Constructor';
import { ConstructorStanding } from '../../models/apiTypes';
import Table from '../Table/Table';

interface props {
  constructors: ConstructorStanding[];
}

const ConstructorsStanding: React.FC<props> = ({ constructors }) => {
  const standingList: React.ReactNode = (
    constructors.map((constructor) => (
      <Constructor
        stats={constructor}
      />
    ))
  );

  return (
    <Table list={standingList}>
      <tr className="table__row">
        <th className="table__cell">Pos</th>
        <th className="table__cell text_left">Team</th>
        <th className="table__cell">Pts</th>
        <th className="table__cell">Wins</th>
        <th className="table__cell table__cell_type_nationality">Nat</th>
      </tr>
    </Table>
  );
};

export default ConstructorsStanding;
