import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Schedule from '../Schedule/Schedule';
import Standing from '../Standing/Standing';
import Background from '../Background/Background';
import Footer from '../Footer/Footer';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { BREAKPOINTS, URLS } from '../../utils/constants';
import DriverPage from '../DriverPage/DriverPage';
import GrandPrixPage from '../GrandPrixPage/GrandPrixPage';

const App: React.FC = () => {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <Background />
      <Header />
      <main className="main">
        <Routes>
          <Route path={URLS.schedule} element={<Schedule />} />
          <Route path={URLS.standing} element={<Standing />} />
          <Route path="/stats/driver/:id" element={<DriverPage />} />
          <Route
            path="/stats/grandprix/:season/:round"
            element={<GrandPrixPage />}
          />
          <Route path="*" element={<Navigate to={URLS.schedule} replace />} />
        </Routes>
      </main>
      {windowWidth <= BREAKPOINTS.mobile && <Footer />}
    </>
  );
};
export default App;
