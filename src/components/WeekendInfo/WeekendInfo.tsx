import React, { useEffect, useState } from 'react';

import './WeekendInfo.scss';
import placeholder from '../../images/F1-logo.svg';
import { refactorWeekendDates } from '../../utils/utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Session from '../Session/Session';
import { useActions } from '../../hooks/useActions';

const WeekendInfo: React.FC = () => {
  const { fetchWikiData } = useActions();

  const weekend = useTypedSelector((state) => state.weekend);
  const { loading, wikiData, error } = useTypedSelector((state) => state.wikiData);

  const wikiTitle = weekend?.raceName.replace(' ', '_');
  const dates = weekend && refactorWeekendDates(weekend);

  useEffect(() => {
    if (weekend) {
      fetchWikiData(wikiTitle!);
    }
  }, [weekend]);

  return (
    <div className="weekend-info">
      <h3 className="weekend-info__header">{weekend?.raceName}</h3>
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
      { weekend && (
        <ul className="weekend-info__dates">
          <Session
            title="FP1"
            date={dates.firstPractice.date}
            time={dates.firstPractice.time}
            type="practice"
          />
          <Session
            title="FP2"
            date={dates.secondPractice.date}
            time={dates.secondPractice.time}
            type="practice"
          />
          {
            weekend.ThirdPractice && (
              <Session
                title="FP3"
                date={dates.thirdPractice!.date}
                time={dates.thirdPractice!.time}
                type="practice"
              />
            )
          }
          {
            weekend.Sprint && (
              <Session
                title="Sprint"
                date={dates.sprint!.date}
                time={dates.sprint!.time}
                type="sprint"
              />
            )
          }
          <Session
            title="QU"
            date={dates.qualifying.date}
            time={dates.qualifying.time}
            type="qualifying"
          />
          <Session
            title="RACE"
            date={dates.race.date}
            time={dates.race.time}
            type="race"
          />
        </ul>
      )}
    </div>
  );
};

export default WeekendInfo;
