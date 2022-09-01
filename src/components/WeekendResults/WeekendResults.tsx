import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import './WeekendResults.scss';
import { Race } from '../../models/ergastApiTypes';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Dropdown from '../Dropdown/Dropdown';
import RaceResults from '../RaceResults/RaceResults';
import QualifyResults from '../QualifyResults/QualifyResults';
import Preloader from '../Preloader/Preloader';

interface Props {
  weekend: Race;
}

const WeekendResults: React.FC<Props> = ({ weekend }) => {
  const { fetchRaceResult } = useActions();
  const {
    resultLoading,
    raceResult,
    qualifyResult,
  } = useTypedSelector((state) => state.result);
  // const { session } = useTypedSelector((state) => state.dropdown);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [session, setSession] = useState('race');

  // const dropDownOptions = [{
  //   name: 'Race',
  //   value: 'race',
  // }, {
  //   name: 'Qualify',
  //   value: 'qualifying',
  // }];

  useEffect(() => {
    if (session) {
      fetchRaceResult(weekend.season, weekend.round, session);
    }
  }, [session, weekend]);

  // const renderResults = (): JSX.Element => {
  //   if (!resultLoading) {
  //     if (session === 'race' && raceResult) {
  //       return <RaceResults results={raceResult} />;
  //     }
  //     if (session === 'qualifying' && qualifyResult) {
  //       return <QualifyResults results={qualifyResult} />;
  //     }
  //   }
  //   return <Preloader />;
  // };

  const handleChangeSession = (): void => {
    if (session === 'race') setSession('qualifying');
    if (session === 'qualifying') setSession('race');
  };

  return (
    <div className="weekend-results">
      {/* <Dropdown
        title="Session"
        options={dropDownOptions}
      /> */}
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
        <SwiperSlide>
          {
            raceResult
            && <RaceResults results={raceResult} />
          }
        </SwiperSlide>
        <SwiperSlide>
          {
            qualifyResult
            && <QualifyResults results={qualifyResult} />
          }
        </SwiperSlide>
      </Swiper>
      {/* { session && renderResults() } */}
    </div>
  );
};

export default WeekendResults;
