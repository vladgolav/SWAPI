export const getPeopleList = (page: number): string => `https://swapi.dev/api/people/?page=${page}`;

export const getFilms = (page = 1): string => `https://swapi.dev/api/films?page=${page}`;
export const getPlanets = (page = 1): string => `https://swapi.dev/api/planets?page=${page}`;
export const getSpecies = (page = 1): string => `https://swapi.dev/api/species?page=${page}`;
