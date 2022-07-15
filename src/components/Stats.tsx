import React, { ReactElement, useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../styles/components/Stats.scss';
import flags from '../utils/flags';
import Driver from './Driver';

function Stats(): ReactElement {
  const { fetchDriverStanding } = useActions();
  const { standing, loading, error } = useTypedSelector(
    (state) => state.driversStanding,
  );

  useEffect(() => {
    fetchDriverStanding();
  }, []);

  return (
    <section className="stats">
      <ul className="stats__list">
        <ul className="driver__params driver__params_head">
          <li className="driver__param text_center">Pos</li>
          <li className="driver__param">Name</li>
          <li className="driver__param text_center">Pts</li>
          <li className="driver__param text_center">Wins</li>
          <li className="driver__param">Team</li>
          <li className="driver__param text_center">Nationality</li>
        </ul>
        {error && <h3 style={{ color: '#fff' }}>{error}</h3>}
        {loading && <h3 style={{ color: '#fff' }}>Loading...</h3> }
        {!loading && !error && standing.map(
          (driver) => (
            <Driver
              key={driver.Driver.driverId}
              stats={driver}
              flag={flags[driver.Driver.nationality]}
            />
          ),
        )}
      </ul>
    </section>
  );
}

export default Stats;
