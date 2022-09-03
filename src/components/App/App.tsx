import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import CursorFollower from '../CursorFollower/CursorFollower';
import Footer from '../Footer/Footer';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS } from '../../utils/constants';

const App: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Header />
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
        <Route path="/popup">
          <Popup />
        </Route>
        {windowWidth > BREAKPOINTS.mobile && <CursorFollower />}
      </main>
      {windowWidth <= BREAKPOINTS.mobile && <Footer />}
    </>
  );
};
export default App;
