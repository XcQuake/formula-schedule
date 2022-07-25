import React from 'react';

import './Table.scss';

interface Props {
  list: React.ReactNode;
  children: React.ReactNode;
}

const Table: React.FC<Props> = ({ list, children }) => (
  <table className="table" cellSpacing="0">
    <thead>{children}</thead>
    <tbody>{list}</tbody>
  </table>
);

export default Table;
