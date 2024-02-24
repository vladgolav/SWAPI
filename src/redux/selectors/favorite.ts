import { createSelector } from "@reduxjs/toolkit";

import { IRootState } from "..";
import { IFavoriteSplitedLists } from "src/interfaces/redux/favorite-redux.interface";

export const favoriteListSelector = (state: IRootState) => state.favorite.favoriteList;

export const favoriteSplitedListsSelector = createSelector(
  favoriteListSelector,
  (favoriteList) => {
    const init: IFavoriteSplitedLists = {
      male: [],
      female: [],
      other: [],
    };
    
    return favoriteList.reduce((acc, item) => {
      if (item.gender === 'male') {
        acc.male.push(item);
      } else if (item.gender === 'female') {
        acc.female.push(item);
      } else {
        acc.other.push(item);
      }

      return acc;
    }, init);
  },
);
