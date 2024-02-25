import { createSelector } from "@reduxjs/toolkit";

import { IRootState } from "..";
import { filmsSelector } from "./films";
import { planetsSelector } from "./planets";
import { speciesSelector } from "./species";

export const personSelector = (state: IRootState) => state.person.currentPerson;

export const currentPersonSelector = createSelector(
  [
    personSelector,
    filmsSelector,
    planetsSelector,
    speciesSelector,
  ],
  (person, films, planets, species) => {
    const personFilms = person?.films?.map((personFilm => {
      const foundFilm = films.find(film => film.url === personFilm);
      if (foundFilm) {
        return foundFilm;
      }
      return null;
    })).filter(item => item);

    const personSpecies = person?.species?.map((personSpecie => {
      const foundSpecie = species.find(film => film.url === personSpecie);
      if (foundSpecie) {
        return foundSpecie;
      }
      return null;
    })).filter(item => item);

    const personHomeworld = planets.find(planet => planet.url === person?.homeworld);

    return {
      ...person,
      films: personFilms,
      species: personSpecies,
      homeworld: personHomeworld,
    };
  }
);