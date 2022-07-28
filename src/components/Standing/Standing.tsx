/* eslint-disable import/no-unresolved */
import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  const handleChangeChampionship = (): void => {
    if (championship === 'constructor') {
      setChampionship('driver');
    }
    if (championship === 'driver') {
      setChampionship('constructor');
    }
  };

  const renderList: React.ReactNode = (
    (drivers && <DriversList drivers={drivers} />)
    || (constructors && <ConstructorsList constructors={constructors} />)
  );

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="standing">
      <ToggleButton
        labels={{ firstState: 'Drivers', secondState: 'Constructors' }}
        onClick={handleChangeChampionship}
      />
      <div className="standing__wrapper">
        {loading && <Preloader />}
        {/* {!loading && !error && renderList} */}
        <Swiper
          className="mySwiper"
          onSlideChange={() => { handleChangeChampionship(); }}
          modules={[Navigation]}
          dir="ltr"
        >
          <SwiperSlide>
            {drivers && <DriversList drivers={drivers} />}
          </SwiperSlide>
          <SwiperSlide>
            {constructors && <ConstructorsList constructors={constructors} />}
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Standing;
