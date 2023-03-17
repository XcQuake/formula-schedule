import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS, URLS } from '../../utils/constants';

const App: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Background />
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Routes>
            <Route path={URLS.stats} element={<Stats />} />
            <Route path={URLS.schedule} element={<Schedule />} />
            <Route path={URLS.standing} element={<Standing />} />
            <Route path="*" element={<Navigate to={URLS.schedule} replace />} />
          </Routes>
        </div>
      </main>
      {windowWidth <= BREAKPOINTS.mobile && <Footer />}
    </>
  );
};
export default App;
