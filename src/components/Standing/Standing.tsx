/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

import './Standing.scss';
import { useActions } from '../../hooks/useActions';
import DriversList from '../DriversList/DriversList';
import ConstructorsList from '../ConstructorsList/ConstructorsList';
import DriverInfo from '../DriverInfo/DriverInfo';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { RootState } from '../../state';
import { Season } from '../../models/ergastApiTypes';
import Dropdown from '../Dropdown/Dropdown';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getSeasons } from '../../utils/utils';

interface Props {
  seasons: Season[],
  selectedSeason: { name: string, value: string },
  error: string | null,
}

const Standing: React.FC<Props> = ({
  seasons,
  selectedSeason,
  error,
}) => {
  const { fetchStanding, fetchSeasons } = useActions();
  const [championship, setChampionship] = useState('driver');
  const { windowWidth } = useWindowWidth();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchSeasons();
  }, []);

  useEffect(() => {
    if (selectedSeason) fetchStanding(selectedSeason.value);
  }, [selectedSeason]);

  const handleChangeChampionship = (): void => {
    if (championship === 'constructor') setChampionship('driver');
    if (championship === 'driver') setChampionship('constructor');
  };

  return (
    <section className="standing">
      <div className="standing__wrapper">
        <div className="standing__navigation">
          <div className="standing__swiper-buttons">
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
          <Dropdown
            title="Season"
            options={getSeasons(currentYear)}
          />
        </div>
        <div className="standing__container">
          <Swiper
            className="standing__swiper"
            onSlideChange={() => { handleChangeChampionship(); }}
            navigation={{ prevEl, nextEl }}
            modules={[Navigation]}
            dir="ltr"
            autoHeight
          >
            <SwiperSlide>
              {!error ? <DriversList /> : <ErrorMessage />}
            </SwiperSlide>
            <SwiperSlide>
              {!error ? <ConstructorsList /> : <ErrorMessage />}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      { windowWidth > 1199 && <DriverInfo /> }
    </section>
  );
};

const mapStateToProps = (state: RootState): Props => ({
  seasons: state.seasons.seasons,
  selectedSeason: state.dropdown.season,
  error: state.standing.error,
});

export default connect(mapStateToProps)(Standing);
