import { useReducer } from "react";
import { accordionReducer } from "./useAccordion.utils";
import {
  AccordionReducer,
  AccordionActionTypes,
  AccordionProps,
  Action,
} from "./useAccorfion.types";

export function useAccordion({ reducer = accordionReducer }: AccordionProps) {
  const [openIndexes, dispatch] = useReducer(reducer, [0]);
  function toggleIndex(index: number) {
    dispatch({ type: AccordionActionTypes.TOGGLE_INDEX, payload: index });
  }

  return { openIndexes, toggleIndex };
}
