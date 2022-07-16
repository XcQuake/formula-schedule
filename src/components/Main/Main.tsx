import './Main.scss';
import React, { ReactElement } from 'react';
import Stats from '../Stats/Stats';
import Schedule from '../Schedule/Schedule';

export default function Main(): ReactElement {
  return (
    <main className="main">
      <Stats />
      <Schedule />
    </main>
  );
}
