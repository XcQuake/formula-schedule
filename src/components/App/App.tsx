import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS, URLS } from '../../utils/constants';

const App: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Route path={URLS.schedule}>
            <Schedule />
          </Route>
          <Route path={URLS.standing}>
            <Standing />
          </Route>
          <ErrorPopup />
        </div>
        <Route path={URLS.stats}>
          <Stats />
        </Route>
        <Redirect to={URLS.schedule} />
        <Background />
      </main>
      {windowWidth <= BREAKPOINTS.mobile && <Footer />}
    </>
  );
};
export default App;
