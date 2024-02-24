import { FavoriteArrayType } from "./redux/favorite-redux.interface";
import { IPerson } from "./redux/people-list-redux.interface";

export interface IPeopleListContext {
  goToPerson: (item: IPerson) => void;
  onAddToFavoriteList: (item: IPerson) => void;
  onRemoveFromFavoriteList: (url: string) => void;
  favoriteList: FavoriteArrayType;
}
