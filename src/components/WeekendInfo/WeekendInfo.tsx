import React, { useEffect } from 'react';
import { isPast, parseISO, addHours } from 'date-fns';

import './WeekendInfo.scss';
import placeholder from '../../images/F1-logo.svg';
import { refactorWeekendDates } from '../../utils/utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Session from '../Session/Session';
import { useActions } from '../../hooks/useActions';
import ResultsList from '../ResultsList/ResultsList';
import Preloader from '../Preloader/Preloader';

const WeekendInfo: React.FC = () => {
  const { fetchWikiData, fetchRaceResult } = useActions();

  const weekend = useTypedSelector((state) => state.weekend);
  const { wikiData } = useTypedSelector((state) => state.wikiData);
  const {
    resultLoading,
    raceResult,
    resultError,
  } = useTypedSelector((state) => state.result);

  const wikiTitle = weekend?.raceName.replace(' ', '_');
  const rawDate = weekend && `${weekend.date}T${weekend.time}`;

  const weekendInfo = weekend && {
    dates: refactorWeekendDates(weekend),
    isOver: isPast(addHours(parseISO(rawDate!), 3)),
  };

  useEffect(() => {
    if (weekend) {
      if (weekendInfo?.isOver) {
        fetchRaceResult(weekend.season, weekend.round);
      }
      fetchWikiData(wikiTitle!);
    }
  }, [weekend]);

  return (
    <div className="weekend-info">
      <h3 className="weekend-info__header">{weekend?.raceName}</h3>
      {
        weekend
        && !weekendInfo!.isOver
        && (
        <>
          <figure className="weekend-info__figure">
            <img
              className="weekend-info__image"
              src={wikiData ? wikiData.imgSource : placeholder}
              alt={weekend?.Circuit.circuitName}
            />
            <h5 className="weekend-info__circuit-name">
              {weekend?.Circuit.circuitName}
            </h5>
          </figure>
          <div className="weekend-info__circuit-description">
            <p className="weekend-info__circuit-info">
              Country: <span>{weekend?.Circuit.Location.country}</span>
            </p>
            <p className="weekend-info__circuit-info">
              Locality: <span>{weekend?.Circuit.Location.locality}</span>
            </p>
          </div>
        </>
        )
      }
      {
        weekend
        && !weekendInfo!.isOver
        && (
        <ul className="weekend-info__dates">
          <Session
            title="FP1"
            date={weekendInfo!.dates.firstPractice.date}
            time={weekendInfo!.dates.firstPractice.time}
            type="practice"
          />
          <Session
            title="FP2"
            date={weekendInfo!.dates.secondPractice.date}
            time={weekendInfo!.dates.secondPractice.time}
            type="practice"
          />
          {
            weekend.ThirdPractice && (
              <Session
                title="FP3"
                date={weekendInfo!.dates.thirdPractice!.date}
                time={weekendInfo!.dates.thirdPractice!.time}
                type="practice"
              />
            )
          }
          {
            weekend.Sprint && (
              <Session
                title="Sprint"
                date={weekendInfo!.dates.sprint!.date}
                time={weekendInfo!.dates.sprint!.time}
                type="sprint"
              />
            )
          }
          <Session
            title="QU"
            date={weekendInfo!.dates.qualifying.date}
            time={weekendInfo!.dates.qualifying.time}
            type="qualifying"
          />
          <Session
            title="RACE"
            date={weekendInfo!.dates.race.date}
            time={weekendInfo!.dates.race.time}
            type="race"
          />
        </ul>
        )
      }
      {
        weekendInfo?.isOver
        && resultLoading
        && <Preloader />
      }
      {
        weekendInfo?.isOver
        && !resultLoading
        && raceResult
        && <ResultsList results={raceResult} />
      }
    </div>
  );
};

export default WeekendInfo;
