export interface RapidDriverTeam {
  season: number,
  team: {
    id: number,
    name: string,
    logo: string,
  }
}

export interface RapidDriver {
  id: number,
  name: string,
  abbr: string,
  image: string,
  nationality: string,
  country: {
    name: string,
    code: string,
  },
  birthdate: string,
  birthplace: string,
  number: number,
  grands_prix_entered: number,
  world_championships: number,
  podiums: number,
  highest_race_finish: {
    position: number,
    number: number,
  },
  highest_grid_position: number,
  career_points: string,
  teams: RapidDriverTeam[],
}

export interface RapidApiResponse {
  get: string,
  parameters: {
    search: string,
  },
  errors: {
    search: string,
  }[],
  results: number,
  response: RapidDriver[],
}
