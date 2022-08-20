import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import './App.scss';
import Header from '../Header/Header';
import Standing from '../Standing/Standing';
import Schedule from '../Schedule/Schedule';
import Popup from '../Popup/Popup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import Canvas from '../Canvas/Canvas';

const App: React.FC = () => {
  // const ref = useRef<HTMLDivElement>(null);
  const [imagePos, setImagePos] = useState([{ x: 0, y: 0 }]);

  // const handlerMoveMouse = useCallback((e: MouseEvent) => {
  //   const rect = ref.current!.getBoundingClientRect();
  //   // console.log('Rect:', rect.x, rect.y, 'E:', e.x, e.y);
  //   setImagePos([...imagePos, { x: e.x - rect.x, y: e.y - rect.y }]);
  // }, []);

  // useEffect(() => {
  //   const newRef = ref.current;
  //   newRef!.addEventListener('mousemove', handlerMoveMouse);
  //   return () => {
  //     newRef!.removeEventListener('mousemove', handlerMoveMouse);
  //   };
  // }, [handlerMoveMouse]);

  // // let point = { x: 0, y: 0 };
  // // let target = { x: 0, y: 0 };
  // const k = 0.08;

  // // eslint-disable-next-line no-plusplus
  // for (let i = 1; i < imagePos.length; i++) {
  //   const point = imagePos[i];
  //   const target = imagePos[i - 1];
  //   point.x += k * (target.x - point.x);
  //   point.y += k * (target.y - point.y);
  // }

  return (
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
        <ErrorPopup />
      </main>
      <Canvas />
      <Popup />
    </>
  );
};

export default App;
