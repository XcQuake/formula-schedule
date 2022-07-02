import React, { ReactElement, useState, useEffect, useMemo } from 'react';
import Header from './Header';
import api from '../utils/api';
import { CurrentSeasonContext } from '../contexts/CurrentSeasonContext';
import { DriverStandingData, RaceData } from '../models/apiTypes';
import Main from './Main';

function App(): ReactElement {
  const [driversStanding, setDriverStanding] = useState<DriverStandingData[]>([]);
  const [races, setRaces] = useState<RaceData[]>([]);
  const currentSeason = useMemo(
    () => ({
      driversStanding,
      setDriverStanding,
      races,
      setRaces,
    }),
    [driversStanding, races],
  );

  useEffect(() => {
    api.getSchedule()
      .then((data) => {
        setRaces(data);
      })
      .catch((err: Error) => console.log(err));

    api.getDriverStanding()
      .then((data) => {
        setDriverStanding(data.DriverStandings);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <CurrentSeasonContext.Provider value={currentSeason}>
        <Main />
      </CurrentSeasonContext.Provider>
    </>
  );
}

export default App;
