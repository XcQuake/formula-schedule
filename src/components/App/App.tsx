import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Standing from '../Standing/Standing';
import Schedule from '../Schedule/Schedule';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__wrapper">
          <Routes>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/standing" element={<Standing />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
