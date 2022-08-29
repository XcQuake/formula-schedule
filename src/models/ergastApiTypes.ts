export type Driver = {
  driverId: string,
  permanentNumber: string,
  code: string,
  url: string,
  givenName: string,
  familyName: string,
  dateOfBirth: string,
  nationality: string,
}

export type Constructor = {
  constructorId: string,
  url: string,
  name: string,
  nationality: string,
}

export type DriverStanding = {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Driver: Driver,
  Constructors: Constructor[],
}

export type ConstructorStanding = {
  position: string,
  positionText: string,
  points: string,
  wins: string,
  Constructor: Constructor,
}

export type StandingList = {
  season: string,
  round: string,
  DriverStandings?: DriverStanding[],
  ConstructorStandings?: ConstructorStanding[],
}

export type StandingsTable = {
  season: string,
  StandingsLists: StandingList[],
}

export type Location = {
  let: string,
  long: string,
  locality: string,
  country: string,
}

export type Circuit = {
  circuitId: string,
  url: string,
  circuitName: string,
  Location: Location,
}

export type Practice = {
  date: string,
  time: string,
}

export type Time = {
  millis?: string,
  time: string,
}

export type AverageSpeed = {
  units: string,
  speed: string,
}

export type FastestLap = {
  rank: string,
  lap: string,
  Time: Time,
  AverageSpeed: AverageSpeed,
}

export type Result = {
  number: string,
  position: string,
  points: string,
  Driver: Driver,
  Constructor: Constructor,
  grid: string,
  laps: string,
  status: string,
  Time: Time,
  FastestLap: FastestLap,
}

export type QualifyingResult = {
  number: string,
  position: string,
  Driver: Driver,
  Constructor: Constructor,
  Q1: string,
  Q2?: string,
  Q3?: string,
}

export type Race = {
  season: string,
  round: string,
  url: string,
  raceName: string,
  Circuit: Circuit,
  date: string,
  time: string,
  Results?: Result[],
  QualifyingResults?: QualifyingResult[],
  FirstPractice: Practice,
  SecondPractice: Practice,
  ThirdPractice?: Practice,
  Sprint?: Practice,
  Qualifying: Practice,
}

export type RaceTable = {
  season: string,
  round?: string,
  Races: Race[],
}

export type Season = {
  season: string,
  url: string,
}

export type SeasonTable = {
  Seasons: Season[],
}

export type MRData = {
  xmins: string,
  series: string,
  url: string,
  limit: string,
  offset: string,
  total: string,
  StandingsTable?: StandingsTable,
  RaceTable?: RaceTable,
  SeasonTable?: SeasonTable,
}

export type StandingData =
  | DriverStanding[]
  | ConstructorStanding[];
