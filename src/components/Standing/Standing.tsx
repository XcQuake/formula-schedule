/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import './Standing.scss';
import { useActions } from '../../hooks/useActions';
import DriversList from '../DriversList/DriversList';
import Preloader from '../Preloader/Preloader';
import ConstructorsList from '../ConstructorsList/ConstructorsList';
import DriverInfo from '../DriverInfo/DriverInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { RootState } from '../../state';
import { StandingList } from '../../models/ergastApiTypes';

interface Props {
  standingList: StandingList | null,
  standingListLoading: boolean,
}

const Standing: React.FC<Props> = ({ standingList, standingListLoading }) => {
  const { fetchStanding } = useActions();
  const [championship, setChampionship] = useState('driver');
  const { windowWidth } = useWindowWidth();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const drivers = standingList?.DriverStandings;
  const constructors = standingList?.ConstructorStandings;

  useEffect(() => {
    fetchStanding('current', championship);
  }, [championship]);

  const handleChangeChampionship = (): void => {
    if (championship === 'constructor') setChampionship('driver');
    if (championship === 'driver') setChampionship('constructor');
  };

  return (
    <section className="standing">
      <div className="standing__wrapper">
        <div className="standing__navigation">
          <button
            className="standing__button standing__button_prev"
            ref={(node) => setPrevEl(node)}
            type="button"
          >
            Drivers
          </button>
          <button
            className="standing__button standing__button_next"
            ref={(node) => setNextEl(node)}
            type="button"
          >
            Constructors
          </button>
        </div>
        <div className="standing__container">
          <Swiper
            className="standing__swiper"
            onSlideChange={() => { handleChangeChampionship(); }}
            navigation={{ prevEl, nextEl }}
            modules={[Navigation]}
            dir="ltr"
          >
            {standingListLoading && <Preloader />}
            <SwiperSlide>
              {
                !standingListLoading
                && drivers
                && <DriversList drivers={drivers} />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                !standingListLoading
                && constructors
                && <ConstructorsList constructors={constructors} />
              }
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      { windowWidth > 1199 && <DriverInfo /> }
    </section>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  standingList: state.standing.standingList,
  standingListLoading: state.standing.loading,
});

export default connect(mapStateToProps)(Standing);
