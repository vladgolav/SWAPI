export interface IPlanet {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export type PlanetsArrayType = IPlanet[];

// reducer

export interface IPlanetsReducer {
  planets: PlanetsArrayType;
  lastUpdatedTime: Date | null;
}

// responses

export interface IGetPlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetsArrayType;
}