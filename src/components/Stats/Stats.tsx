import React, { ReactElement, useEffect, useState } from 'react';

import './Stats.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DriverStanding, StandingData } from '../../models/apiTypes';
import DriversList from '../DriversList/DriversList';
import Preloader from '../Preloader/Preloader';
import ToggleButton from '../Buttons/ToggleButton/ToggleButton';
import ConstructorsList from '../ConstructorsList/ConstructorsList';

const Stats = (): ReactElement => {
  const { fetchStanding } = useActions();
  const { standingList, loading, error } = useTypedSelector(
    (state) => state.standing,
  );
  const [championship, setChampionship] = useState('driver');

  // useEffect(() => {
  //   fetchStanding('current', championship);
  // }, []);

  useEffect(() => {
    fetchStanding('current', championship);
  }, [championship]);

  const handleCHangeChampionship = (id: string): void => {
    if (id === 'Drivers') {
      setChampionship('driver');
    }
    if (id === 'Constructors') {
      setChampionship('constructor');
    }
  };

  return (
    <section className="stats">
      <ToggleButton
        labels={{ firstState: 'Drivers', secondState: 'Constructors' }}
        onClick={handleCHangeChampionship}
      />
      {loading && <Preloader />}
      {/* {
        !loading
        && !error
        && <DriversList drivers={standingList} />
      } */}
      {
        standingList?.DriverStandings
        && <DriversList drivers={standingList.DriverStandings} />
      }
      {
        standingList?.ConstructorStandings
        && <ConstructorsList constructors={standingList.ConstructorStandings} />
      }
    </section>
  );
};

export default Stats;
