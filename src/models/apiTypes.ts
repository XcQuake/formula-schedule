export type DriverData = {
  driverId: string,
  permanentNumber: string,
  code: string,
  url: string,
  givenName: string,
  familyName: string,
  dateOfBirth: string,
  nationality: string,
}

export type ConstructorData = {
  constructorId: string,
  url: string,
  name: string,
  nationality: string,
}

export type DriverStandingData = {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Driver: DriverData,
  Constructors: ConstructorData[],
}

export type StandingListData = {
  season: string,
  round: string,
  DriverStandings: DriverStandingData[],
}

export type StandingTableData = {
  season: string,
  StandingsLists: StandingListData[],
}

export type LocationData = {
  let: string,
  long: string,
  locality: string,
  country: string,
}

export type CircuitData = {
  circuitId: string,
  url: string,
  circuitNmae: string,
  Location: LocationData,
}

export type PracticeData = {
  date: string,
  time: string,
}

export type RaceData = {
  season: string,
  round: string,
  url: string,
  raceName: string,
  Circuit: CircuitData,
  date: string,
  time: string,
  FirstPractice: PracticeData,
  SecondPractice: PracticeData,
  ThirdPractice?: PracticeData,
  Sprint?: PracticeData,
  Qualifying: PracticeData,
}

export type RaceTableData = {
  season: string,
  Races: RaceData[],
}

export type ApiData = {
  xmins: string,
  series: string,
  url: string,
  limit: string,
  offset: string,
  total: string,
  StandingsTable?: StandingTableData,
  RaceTable?: RaceTableData,
}
