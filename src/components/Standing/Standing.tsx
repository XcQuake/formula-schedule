import React, { ReactElement, useEffect, useState } from 'react';

import './Standing.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import DriversList from '../DriversList/DriversList';
import Preloader from '../Preloader/Preloader';
import ToggleButton from '../Buttons/ToggleButton/ToggleButton';
import ConstructorsList from '../ConstructorsList/ConstructorsList';

const Standing = (): ReactElement => {
  const { fetchStanding } = useActions();
  const { standingList, loading, error } = useTypedSelector(
    (state) => state.standing,
  );
  const [championship, setChampionship] = useState('driver');
  const drivers = standingList?.DriverStandings;
  const constructors = standingList?.ConstructorStandings;

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

  const renderList: React.ReactNode = (
    (drivers && <DriversList drivers={drivers} />)
    || (constructors && <ConstructorsList constructors={constructors} />)
  );

  const newloading = true;

  return (
    <section className="standing">
      <ToggleButton
        labels={{ firstState: 'Drivers', secondState: 'Constructors' }}
        onClick={handleCHangeChampionship}
      />
      <div className="standing__wrapper">
        {loading && <Preloader />}
        {!loading && !error && renderList}
      </div>
    </section>
  );
};

export default Standing;
