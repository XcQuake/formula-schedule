import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import './Main.scss';
import Standing from '../Standing/Standing';
import Schedule from '../Schedule/Schedule';
import Preloader from '../Preloader/Preloader';

export default function Main(): ReactElement {
  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standing" element={<Standing />} />
        </Routes>
      </div>
    </main>
  );
}
