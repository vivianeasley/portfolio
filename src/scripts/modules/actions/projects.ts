import { updateState, getCurrentState } from "../state/management";

export function setProjectFilterAscending () {
    updateState((state:any)=>{
        state.ui.filters.isAscending = !state.ui.filters.isAscending;
      });
}

export function setProjectFiltersOrdered () {
    updateState((state:any)=>{
        state.ui.filters.orderByInterestesting = !state.ui.filters.orderByInterestesting;
      });
}