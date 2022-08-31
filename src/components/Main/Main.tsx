import React from 'react';
import { Route } from 'react-router-dom';

import './Main.scss';
import CursorFollower from '../CursorFollower/CursorFollower';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';

const Main: React.FC = () => (
  <main className="main">
    <div className="main__wrapper">
      <Route path="/schedule">
        <Schedule />
      </Route>
      <Route path="/standing">
        <Standing />
      </Route>
      <ErrorPopup />
    </div>
    <CursorFollower />
  </main>
);

export default Main;
