import React, { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriverInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { Driver } from '../../models/ergastApiTypes';

const DriverInfo: React.FC = () => {
  const { fetchDriver } = useActions();

  const driver = useTypedSelector((state) => state.element) as Driver;
  const {
    driverLoading,
    driverInfo,
    driverError,
  } = useTypedSelector((state) => state.driver);

  const flagUrl = driverInfo && findFlagUrlByNationality(driver.nationality);

  useEffect(() => {
    console.log(driver);
    if (driver) {
      fetchDriver(driver.driverId.replace('_', ' '));
    }
  }, [driver]);

  return (
    driverInfo
    && (
      <div className="driver-info">
        <img
          className="driver-info__image"
          src={driverInfo?.image}
          alt={driverInfo?.name}
        />
        <h3 className="driver-info__header">{driverInfo?.name}</h3>
        <div className="driver-info__container">
          <p className="driver-info__parameter">
            Nationality:
            <span>
              <img className="driver-info__flag" src={flagUrl} alt="flag" />
              {driverInfo?.nationality}
            </span>
          </p>
          <p className="driver-info__parameter">
            Birth date:
            <span>
              {format(parseISO(driverInfo!.birthdate), 'd MMM yyyy')}
            </span>
          </p>
        </div>
      </div>
    )
  );
};

export default DriverInfo;
