import { IRootState } from "..";

export const filmsSelector = (state: IRootState) => state.films.films;
export const lastUpdatedFilmsTimeSelector = (state: IRootState) => state.films.lastUpdatedTime;
