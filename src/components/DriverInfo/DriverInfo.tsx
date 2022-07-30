import React, { useEffect } from 'react';

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

  useEffect(() => {
    if (driver) {
      fetchDriver(`${driver.givenName} ${driver.familyName}`);
    }
  }, [driver]);

  return (
    <div className="driver-info">
      <img
        className="driver-info__image"
        src={driverInfo?.image}
        alt={driverInfo?.name}
      />
      <h3 className="driver-info__header">{driverInfo?.name}</h3>
      <div className="driver-info__container">
        <p className="driver-info__parameter">
          Nationality: <span>{driverInfo?.nationality}</span>
        </p>
        <p className="driver-info__parameter">
          Birth date: <span>{driverInfo?.birthdate}</span>
        </p>
      </div>
    </div>
  );
};

export default DriverInfo;
