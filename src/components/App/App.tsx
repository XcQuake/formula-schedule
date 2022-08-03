import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Standing from '../Standing/Standing';
import Schedule from '../Schedule/Schedule';
import Popup from '../Popup/Popup';

const App: React.FC = () => (
  <>
    <Header />
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standing" element={<Standing />} />
          <Route
            path="*"
            element={<Navigate to="/schedule" replace />}
          />
        </Routes>
      </div>
    </main>
    <Popup />
  </>
);

export default App;
