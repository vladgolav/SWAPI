export enum LoadingEnum { 
  'getList' = 'getList',
  'refreshList' = 'refreshList',
  'loadMoreList' = 'loadMoreList',
  'getCharacterInfo' = 'getCharacterInfo',
}

export type LoadingType = keyof typeof LoadingEnum;

// reducer

export type ILoadingReducer = Record<LoadingEnum, boolean>;

// actions

export type ISetLoadingAction = Partial<{[K in LoadingEnum]: boolean}>;
