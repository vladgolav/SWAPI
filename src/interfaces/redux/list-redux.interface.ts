export interface IListReducer {
  list: object[] | null;
}

// actions

export interface IGetListAction {
  page: number;
}

export interface ISetListAction {
  list: object[];
}
