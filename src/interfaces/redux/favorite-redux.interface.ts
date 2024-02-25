import { IPerson } from "./people-list-redux.interface";

export type FavoriteArrayType = IPerson[];

export interface IFavoriteSplitedLists {
  male: FavoriteArrayType;
  female: FavoriteArrayType;
  other: FavoriteArrayType;
}

// reducer

export interface IFavoriteListReducer {
  favoriteList: FavoriteArrayType;
}
