export type AccordionReducer = (
  openIndex: number[],
  action: Action
) => number[];

export interface AccordionProps {
  reducer?: AccordionReducer;
}

export enum AccordionActionTypes {
  TOGGLE_INDEX = "TOGGLE_INDEX",
}

export type Action = { type: AccordionActionTypes; payload: number };
