import '../styles/Main.scss';
import React, { ReactElement } from 'react';
import Stats from './Stats';
import Schedule from './Schedule';

export default function Main(): ReactElement {
  return (
    <main className="main">
      <Stats />
      <Schedule />
    </main>
  );
}
