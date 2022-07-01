import '../styles/Stats.scss';
import React, { ReactElement, useContext } from 'react';
import { CurrentSeasonContext } from '../contexts/CurrentSeasonContext';
import flags from '../utils/flags';
import Driver from './Driver';

export default function Stats(): ReactElement {
  const currentSeason = useContext(CurrentSeasonContext);

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
        {currentSeason && currentSeason.driversStanding.map(
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
