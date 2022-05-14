import React, { ReactElement } from 'react';
import Header from './Header';

function App(): ReactElement {
  return (
    <>
      <Header />
      {/* <CurrentSeasonContext.Provider value={{driversStanding, races}}>
        <Main/>
      </CurrentSeasonContext.Provider> */}
    </>
  );
}

export default App;
