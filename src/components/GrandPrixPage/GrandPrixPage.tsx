import React, { useEffect, useState } from 'react';
import { isPast, addHours, parseISO } from 'date-fns';
import { useParams } from 'react-router-dom';

import './GrandPrixPage.scss';
import { refactorWeekendDates } from '../../utils/utils';
import { getImage } from '../../requests/wikiApi';
import ergastApi from '../../requests/ergastApi';
import { Race } from '../../models/ergastApiTypes';
import Session from '../Session/Session';
import WeekendResults from '../WeekendResults/WeekendResults';

const GrandPrixPage: React.FC = () => {
  const { season, round } = useParams();

  const [grandPrix, setGrandPrix] = useState<Race | null>(null);
  const [circuitImage, setCircuitImage] = useState('');

  const rawRaceDate = grandPrix && `${grandPrix.date}T${grandPrix.time}`;
  const wikiTitle = grandPrix?.raceName.replace(' ', '_');
  const weekendDates = grandPrix && {
    ...refactorWeekendDates(grandPrix),
    isOver: isPast(addHours(parseISO(rawRaceDate!), 3)),
  };

  useEffect(() => {
    if (season && round) {
      ergastApi.getGrandPrixInfo(season, round)
        .then((data) => setGrandPrix(data));
    }
  }, []);

  useEffect(() => {
    if (grandPrix) {
      getImage(wikiTitle!).then((url) => setCircuitImage(url));
    }
  }, [grandPrix]);

  const renderSessions = weekendDates && (
    <ul className="grandprix__sessions">
      <Session
        title="Free Practice #1"
        date={weekendDates!.firstPractice.date}
        time={weekendDates!.firstPractice.time}
        type="practice"
      />
      <Session
        title="Free Practice #2"
        date={weekendDates!.secondPractice.date}
        time={weekendDates!.secondPractice.time}
        type="practice"
      />
      {weekendDates?.thirdPractice && (
      <Session
        title="Free Practice #3"
        date={weekendDates!.thirdPractice.date}
        time={weekendDates!.thirdPractice.time}
        type="practice"
      />
      )}
      {weekendDates?.sprint && (
      <Session
        title="Sprint"
        date={weekendDates!.sprint.date}
        time={weekendDates!.sprint.time}
        type="sprint"
      />
      )}
      <Session
        title="Qualifying"
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
    <div className="grandprix">
      <h3 className="grandprix__title">{grandPrix?.raceName}</h3>
      <div className="grandprix__wrapper">
        <div className="grandprix__info">
          <p className="grandprix__info_circuit">
            Country: <span>{grandPrix?.Circuit.Location.country}</span>
          </p>
          <p className="grandprix__info_circuit">
            Locality: <span>{grandPrix?.Circuit.Location.locality}</span>
          </p>
          <p className="grandprix__info_circuit">
            Season: <span>{season}</span>
          </p>
          <p className="grandprix__info_circuit">
            Round: <span>{round}</span>
          </p>
          <p className="grandprix__info_circuit">
            Wiki:
            {' '}
            <a
              className="grandprix__info_link"
              href={grandPrix?.Circuit.url}
              target="_blank"
              rel="noreferrer"
            >{grandPrix?.Circuit.circuitName}
            </a>
          </p>
        </div>
        <img
          className="weekend-info__image"
          src={circuitImage}
          alt={grandPrix?.Circuit.circuitName}
        />
      </div>
      {renderSessions}
      {weekendDates?.isOver && <WeekendResults weekend={grandPrix!} />}
    </div>
  );
};

export default GrandPrixPage;
