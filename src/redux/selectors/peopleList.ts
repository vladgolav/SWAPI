import { IRootState } from "..";

export const peopleListSelector = (state: IRootState) => state.peopleList.list;
export const currentPageSelector = (state: IRootState) => state.peopleList.currentPage;
export const countSelector = (state: IRootState) => state.peopleList.count;
