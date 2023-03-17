import React, { useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { useParams } from 'react-router-dom';
import { findFlagUrlByNationality } from 'country-flags-svg';

import './DriverPage.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { normalizeString } from '../../utils/utils';

const DriverPage: React.FC = () => {
  const { id } = useParams();
  const { fetchDriverInfo } = useActions();
  const {
    driverInfo,
    driverInfoLoading,
    driverInfoError,
  } = useTypedSelector((state) => state.driverInfo);

  useEffect(() => {
    if (id) {
      fetchDriverInfo(id);
    }
  }, [id]);

  const flagUrl = driverInfo && findFlagUrlByNationality(
    normalizeString(driverInfo.nationality),
  );

  return (
    <div className="driverpage">
      <div className="driverpage__info">
        <h3 className="driverpage__name">{driverInfo?.name}</h3>
        <div className="driverpage__params">
          <p className="driverpage__param">
            Nationality:
            <span>
              {driverInfo?.nationality}
              <img className="driverpage__flag" src={flagUrl} alt="Flag" />
            </span>
          </p>
          <p className="driverpage__param">
            Born:
            {driverInfo?.birthdate && (
            <span>
              {format(parseISO(driverInfo?.birthdate), 'd MMM yyyy')}
            </span>
            )}
          </p>
          <p className="driverpage__param">
            Championships:
            <span>{driverInfo?.world_championships}</span>
          </p>
          <p className="driverpage__param">
            Entries:
            <span>{driverInfo?.grands_prix_entered}</span>
          </p>
          <p className="driverpage__param">
            Wins:
            <span>
              {
                driverInfo?.highest_race_finish.position === 1
                  ? driverInfo?.highest_race_finish.number
                  : 0
              }
            </span>
          </p>
          <p className="driverpage__param">
            Podiums:
            <span>{driverInfo?.podiums}</span>
          </p>
        </div>
      </div>
      <div className="driverpage__media">
        <img
          className="driverpage__photo"
          alt={driverInfo?.name}
          src={driverInfo?.image}
        />
        <img
          className="driverpage__teamlogo"
          src={driverInfo?.teams[0].team.logo}
          alt="Team logo"
        />
      </div>
    </div>
  );
};

export default DriverPage;
