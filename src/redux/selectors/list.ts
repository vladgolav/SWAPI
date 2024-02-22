import { IRootState } from "..";

export const listSelector = (state: IRootState) => state.list.list;