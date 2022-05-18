import React from 'react';
import { DriverStandingData, RaceData } from '../models/apiTypes';

interface ICurrentSeasonContext {
  driversStanding: DriverStandingData[],
  races: RaceData[],
}

const CurrentSeasonContext = React.createContext<ICurrentSeasonContext | null>(null);

export default CurrentSeasonContext;
