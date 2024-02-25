import { IRootState } from "..";

export const planetsSelector = (state: IRootState) => state.planets.planets;
export const lastUpdatedPlanetsTimeSelector = (state: IRootState) => state.planets.lastUpdatedTime;
