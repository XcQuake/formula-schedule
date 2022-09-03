import React from 'react';
import { Route } from 'react-router-dom';

import './Main.scss';
import CursorFollower from '../CursorFollower/CursorFollower';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../utils/constants';

const Main: React.FC = () => {
  const { windowWidth } = useWindowWidth();

  return (
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
      { windowWidth > BREAKPOINTS.mobile && <CursorFollower /> }
    </main>
  );
};

export default Main;
