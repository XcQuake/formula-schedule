import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';

const App: React.FC = () => (
  <>
    <Header />
    <Main />
    <Route path="/popup">
      <Popup />
    </Route>
  </>
);

export default App;
