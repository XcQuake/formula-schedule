import React, { useEffect } from 'react';

import './WeekendResults.scss';
import { Race } from '../../models/ergastApiTypes';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Dropdown from '../Dropdown/Dropdown';
import RaceResults from '../RaceResults/RaceResults';
import QualifyResults from '../QualifyResults/QualifyResults';
import Preloader from '../Preloader/Preloader';

interface Props {
  weekend: Race;
}

const WeekendResults: React.FC<Props> = ({ weekend }) => {
  const { fetchRaceResult } = useActions();
  const {
    resultLoading,
    raceResult,
    qualifyResult,
  } = useTypedSelector((state) => state.result);
  const { session } = useTypedSelector((state) => state.dropdown);

  const dropDownOptions = [{
    name: 'Race',
    value: 'race',
  }, {
    name: 'Qualify',
    value: 'qualifying',
  }];

  useEffect(() => {
    if (session) {
      fetchRaceResult(weekend.season, weekend.round, session.value);
    }
  }, [session, weekend]);

  const renderResults = (): JSX.Element => {
    if (!resultLoading) {
      if (session.value === 'race' && raceResult) {
        return <RaceResults results={raceResult} />;
      }
      if (session.value === 'qualifying' && qualifyResult) {
        return <QualifyResults results={qualifyResult} />;
      }
    }
    return <Preloader />;
  };

  return (
    <div className="weekend-results">
      <Dropdown
        title="Session"
        options={dropDownOptions}
      />
      { session && renderResults() }
    </div>
  );
};

export default WeekendResults;
