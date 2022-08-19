import React, { useEffect, useState } from 'react';
import { parseISO, format } from 'date-fns';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriverInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { normalizeString } from '../../utils/utils';
import Preloader from '../Preloader/Preloader';

const DriverInfo: React.FC = () => {
  const { fetchDriverInfo } = useActions();

  const { driver } = useTypedSelector((state) => state.driver);
  const {
    driverInfo,
    driverInfoLoading,
    driverInfoError,
  } = useTypedSelector((state) => state.driverInfo);

  const fullName = driver && normalizeString(
    `${driver.givenName} ${driver.familyName}`,
  ).toLowerCase();

  const flagUrl = driverInfo && findFlagUrlByNationality(
    normalizeString(driverInfo.nationality),
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (fullName) {
      const timer = setTimeout(() => {
        fetchDriverInfo(fullName);
      }, 1);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [driver]);

  return (
    <div className="driver-info">
      {!driverInfo && !driverInfoError && driverInfoLoading && <Preloader />}
      {driverInfo && (
        <div className="driver-info__wrapper">
          <img
            className="driver-info__image"
            src={driverInfo?.image}
            alt={driverInfo?.name}
          />
          <h3 className="driver-info__header">{driverInfo?.name}</h3>
          <div className="driver-info__container">
            <div className="driver-info__bio">
              <p className="driver-info__param">
                Nationality:
                <span className="driver-info__param-state">
                  <img className="driver-info__flag" src={flagUrl} alt="flag" />
                  {driverInfo?.nationality}
                </span>
              </p>
              <p className="driver-info__param">
                Born:
                <span>
                  {format(parseISO(driverInfo!.birthdate), 'd MMM yyyy')}
                </span>
              </p>
            </div>
            <div className="driver-info__race-results">
              <p className="driver-info__param">
                Championships:
                <span>{driverInfo.world_championships}</span>
              </p>
              <p className="driver-info__param">
                Entries:
                <span>{driverInfo.grands_prix_entered}</span>
              </p>
              <p className="driver-info__param">
                Wins:
                <span>
                  {
                    driverInfo.highest_race_finish.position === 1
                      ? driverInfo.highest_race_finish.number
                      : 0
                  }
                </span>
              </p>
              <p className="driver-info__param">
                Podiums:
                <span>{driverInfo.podiums}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverInfo;
