import React, { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriverInfo.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { normalizeString } from '../../utils/utils';

const DriverInfo: React.FC = () => {
  const { fetchDriverInfo } = useActions();

  const { driver } = useTypedSelector((state) => state.driver);
  const { driversInfo } = useTypedSelector((state) => state.driverInfo);

  const fullName = driver && normalizeString(
    `${driver.givenName} ${driver.familyName}`,
  ).toLowerCase();

  const driverInfo = driversInfo.find(
    (el) => el.name.toLowerCase() === fullName || el.abbr === driver?.code,
  ) || null;

  const flagUrl = driverInfo && findFlagUrlByNationality(driverInfo.nationality);
  useEffect(() => {
    if (fullName && !driverInfo) {
      fetchDriverInfo(fullName);
    }
  }, [driver]);

  return (
    driverInfo && (
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
