import { IRootState } from "..";

export const speciesSelector = (state: IRootState) => state.species.species;
export const lastUpdatedSpeciesTimeSelector = (state: IRootState) => state.species.lastUpdatedTime;
