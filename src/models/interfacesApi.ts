export interface DriverData {
  driverId: string,
  permanentNumber: string,
  code: string,
  url: string,
  givenName: string,
  familyName: string,
  dateOfBirth: string,
  nationality: string,
}

export interface ConstructorData {
  constructorId: string,
  url: string,
  name: string,
  nationality: string,
}

export interface DriverStandingData {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Driver: DriverData,
  Constructors: ConstructorData[],
}

export interface StandingListData {
  season: string,
  round: string,
  DriverStandings: DriverStandingData[],
}

export interface StandingTableData {
  season: string,
  StandingsLists: StandingListData,
}

export interface LocationData {
  let: string,
  long: string,
  locality: string,
  country: string,
}

export interface CircuitData {
  circuitId: string,
  url: string,
  circuitNmae: string,
  Location: LocationData,
}

export interface PracticeData {
  date: string,
  time: string,
}

export interface RaceData {
  season: string,
  round: string,
  url: string,
  raceName: string,
  Circuit: CircuitData,
  date: string,
  time: string,
  FirstPractice: PracticeData,
  SecondPractice: PracticeData,
  ThirdPractice: PracticeData,
  Qualifying: PracticeData,
}

export interface RaceTableData {
  season: string,
  Races: RaceData[],
}

export interface StandingData {
  xmins: string,
  series: string,
  url: string,
  limit: string,
  offset: string,
  total: string,
  StandingsTable: StandingTableData,
  RaceTable: RaceTableData,
}
