import { useAccordion } from "../useAccordion/useAccordion.hook";
import {
  accordionReducer,
  combineReducers,
  preventCloseReducer,
  singleReducer,
} from "../useAccordion/useAccordion.utils";

export function useTabs() {
  return useAccordion({
    reducer: combineReducers(
      preventCloseReducer,
      singleReducer,
      accordionReducer
    ),
  });
}
