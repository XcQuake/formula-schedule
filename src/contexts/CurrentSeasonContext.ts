import React from 'react';
import { DriverStandingData, RaceData } from '../models/apiTypes';

export interface ICurrentSeasonContext {
  driversStanding: DriverStandingData[],
  races: RaceData[],
}

export const CurrentSeasonContext = React.createContext(
  <ICurrentSeasonContext | null>(null),
);
