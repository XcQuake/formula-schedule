/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';

import './WeekendInfo.scss';
import { refactorDate, refactorWeekendDates } from '../../utils/utils';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import * as wikiApi from '../../requests/wikiApi';
import Session from '../Session/Session';

const WeekendInfo: React.FC = () => {
  const [circuitImage, setCircuitImage] = useState('');

  const weekend = useTypedSelector((state) => state.weekend);
  const wikiUrl = weekend?.Circuit.url;
  const wikiTitle = wikiUrl?.substring(wikiUrl.lastIndexOf('/') + 1);

  const dates = weekend && refactorWeekendDates(weekend);

  useEffect(() => {
    if (weekend) {
      wikiApi.getImage(wikiTitle!)
        .then((image: string) => setCircuitImage(image))
        .catch((err: Error) => console.log(err));
    }
  }, [weekend]);

  return (
    <div className="weekend-info">
      <h3 className="weekend-info__header">{weekend?.raceName}</h3>
      <img
        className="weekend-info__image"
        src={circuitImage}
        alt={weekend?.Circuit.circuitName}
      />
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
          weekend!.ThirdPractice && (
            <Session
              title="FP3"
              date={dates.thirdPractice!.date}
              time={dates.thirdPractice!.time}
              type="practice"
            />
          )
        }
        {
          weekend!.Sprint && (
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
