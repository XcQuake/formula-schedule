import React, { useEffect } from 'react';
import { isPast, parseISO, addHours } from 'date-fns';
import { connect } from 'react-redux';

import './WeekendInfo.scss';
import placeholder from '../../images/F1-logo.svg';
import { RootState } from '../../state';
import { refactorWeekendDates } from '../../utils/utils';
import { useActions } from '../../hooks/useActions';
import { Race } from '../../models/ergastApiTypes';
import Session from '../Session/Session';
import WeekendResults from '../WeekendResults/WeekendResults';
import Placeholder from '../Placeholder/Placeholder';

interface Props {
  weekend: Race | null;
  wikiImage: string | null;
}

const WeekendInfo: React.FC<Props> = ({ weekend, wikiImage }) => {
  const { fetchWikiImage } = useActions();

  const wikiTitle = weekend?.raceName.replace(' ', '_');
  const rawDate = weekend && `${weekend.date}T${weekend.time}`;

  const weekendDates = weekend && {
    ...refactorWeekendDates(weekend),
    isOver: isPast(addHours(parseISO(rawDate!), 3)),
  };

  useEffect(() => {
    if (weekend && !weekendDates?.isOver) {
      fetchWikiImage(wikiTitle!);
    }
  }, [weekend]);

  const renderCircuitInfo: JSX.Element = (
    <>
      <figure className="weekend-info__figure">
        <img
          className="weekend-info__image"
          src={wikiImage || placeholder}
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
  );

  const renderSessionDates: JSX.Element = (
    <ul className="weekend-info__sessions">
      <Session
        title="FP1"
        date={weekendDates!.firstPractice.date}
        time={weekendDates!.firstPractice.time}
        type="practice"
      />
      <Session
        title="FP2"
        date={weekendDates!.secondPractice.date}
        time={weekendDates!.secondPractice.time}
        type="practice"
      />
      {
        weekend?.ThirdPractice && (
          <Session
            title="FP3"
            date={weekendDates!.thirdPractice!.date}
            time={weekendDates!.thirdPractice!.time}
            type="practice"
          />
        )
      }
      {
        weekend?.Sprint && (
          <Session
            title="Sprint"
            date={weekendDates!.sprint!.date}
            time={weekendDates!.sprint!.time}
            type="sprint"
          />
        )
      }
      <Session
        title="QU"
        date={weekendDates!.qualifying.date}
        time={weekendDates!.qualifying.time}
        type="qualifying"
      />
      <Session
        title="RACE"
        date={weekendDates!.race.date}
        time={weekendDates!.race.time}
        type="race"
      />
    </ul>
  );

  return (
    weekendDates ? (
      <div className="weekend-info">
        <h3 className="weekend-info__header">{weekend.raceName}</h3>
        { !weekendDates.isOver && (
          <div className="weekend-info__wrapper">
            {renderCircuitInfo}
            {renderSessionDates}
          </div>
        )}
        {
          weekendDates.isOver
          && <WeekendResults weekend={weekend} />
        }
      </div>
    ) : weekend && (
      <Placeholder.Rect
        height="415px"
        style={{ width: '390px', borderRadius: '10px' }}
      />
    )
  );
};

const mapStateToProps = (state: RootState): Props => ({
  weekend: state.weekend.weekend,
  wikiImage: state.wikiData.wikiImage,
});

export default connect(mapStateToProps)(WeekendInfo);
