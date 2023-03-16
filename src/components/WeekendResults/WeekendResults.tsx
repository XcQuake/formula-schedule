import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './WeekendResults.scss';
import { Race } from '../../models/ergastApiTypes';
import { useActions } from '../../hooks/useActions';
import RaceResults from '../RaceResults/RaceResults';
import QualifyResults from '../QualifyResults/QualifyResults';

interface Props {
  weekend: Race;
}

const WeekendResults: React.FC<Props> = ({ weekend }) => {
  const { fetchRaceResult } = useActions();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [session, setSession] = useState('race');

  useEffect(() => {
    fetchRaceResult(weekend.season, weekend.round);
  }, [weekend]);

  const handleChangeSession = (): void => {
    if (session === 'race') setSession('qualifying');
    if (session === 'qualifying') setSession('race');
  };

  return (
    <div className="weekend-results">
      <div className="weekend-results__navigation">
        <div className="weekend-results__swiper-buttons">
          <button
            className="weekend-results__button standing__button_prev"
            ref={(node) => setPrevEl(node)}
            type="button"
          >
            Race
          </button>
          <button
            className="weekend-results__button standing__button_next"
            ref={(node) => setNextEl(node)}
            type="button"
          >
            Qualifying
          </button>
        </div>
      </div>
      <Swiper
        className="weekend-results__swiper"
        onSlideChange={handleChangeSession}
        navigation={{ prevEl, nextEl }}
        modules={[Navigation]}
        dir="ltr"
      >
        <SwiperSlide className="weekend-results__slide">
          <RaceResults />
        </SwiperSlide>
        <SwiperSlide className="weekend-results__slide">
          <QualifyResults />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WeekendResults;
