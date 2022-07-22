/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';

import './WeekendInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import * as wikiApi from '../../requests/wikiApi';

const WeekendInfo: React.FC = () => {
  const weekend = useTypedSelector((state) => state.weekend);
  const wikiUrl = weekend?.Circuit.url;
  const wikiTitle = wikiUrl?.substring(wikiUrl.lastIndexOf('/') + 1);

  const [circuitImage, setCircuitImage] = useState('');

  useEffect(() => {
    wikiApi.getImage(wikiTitle!)
      .then((image: string) => setCircuitImage(image))
      .catch((err: Error) => console.log(err));
  }, [weekend]);

  return (
    <div className="weekend-info">
      <h3 className="weekend-info__header">{weekend?.raceName}</h3>
      <img
        className="weekend-info__image"
        src={circuitImage}
        alt={weekend?.Circuit.circuitName}
      />
    </div>
  );
};

export default WeekendInfo;
