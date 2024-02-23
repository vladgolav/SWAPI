import { IRootState } from "..";

export const peopleListSelector = (state: IRootState) => state.peopleList.list;