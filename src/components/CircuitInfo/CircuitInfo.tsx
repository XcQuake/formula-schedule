import React from 'react';

import './CircuitInfo.scss';
import { Race } from '../../models/apiTypes';

interface props {
  weekend: Race;
}

const CircuitInfo: React.FC<props> = ({ weekend }) => {
  const foo = 'foo';
  return (
    <div className="circuit-info">
      <h5 className="circuit-info__header">{weekend.Circuit.circuitName}</h5>
      <p className="circuit-info__field">
        Country: <span>{weekend.Circuit.Location.country}</span>
      </p>
      <p className="circuit-info__field">
        Locality: <span>{weekend.Circuit.Location.locality}</span>
      </p>
    </div>
  );
};

export default CircuitInfo;
