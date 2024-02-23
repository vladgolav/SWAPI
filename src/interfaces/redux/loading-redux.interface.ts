export enum LoadingEnum { 
  'getPeopleList' = 'getPeopleList',
  'refreshPeopleList' = 'refreshPeopleList',
  'loadMorePeopleList' = 'loadMorePeopleList',
  'getPersonInfo' = 'getPersonInfo',
}

export type LoadingType = keyof typeof LoadingEnum;

// reducer

export type ILoadingReducer = Record<LoadingEnum, boolean>;

// actions

export type ISetLoadingAction = Partial<{[K in LoadingEnum]: boolean}>;
