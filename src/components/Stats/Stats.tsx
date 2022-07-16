import React, { ReactElement, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Stats.scss';
import flags from '../../utils/flags';
import Driver from '../Driver/Driver';
import Preloader from '../Preloader/Preloader';

function Stats(): ReactElement {
  const { fetchDriverStanding } = useActions();
  const { standing, loading, error } = useTypedSelector(
    (state) => state.driversStanding,
  );

  useEffect(() => {
    fetchDriverStanding();
  }, []);

  const renderedStanding: React.ReactNode = (
    !loading && !error && standing.map(
      (driver) => (
        <Driver
          key={driver.Driver.driverId}
          stats={driver}
          flag={flags[driver.Driver.nationality]}
        />
      ),
    )
  );

  return (
    <section className="stats">
      <h3 className="stats__header">Standing</h3>
      <ul className="stats__list">
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
      {loading && <Preloader />}
    </section>
  );
}

export default Stats;
