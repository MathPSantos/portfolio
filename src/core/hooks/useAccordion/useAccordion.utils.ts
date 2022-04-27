import {
  AccordionActionTypes,
  AccordionReducer,
  Action,
} from "./useAccorfion.types";

const accordionReducer: AccordionReducer = (
  openIndexes: number[],
  action: Action
) => {
  switch (action.type) {
    case AccordionActionTypes.TOGGLE_INDEX:
      const closing = openIndexes.includes(action.payload);
      return closing
        ? openIndexes.filter((i) => i !== action.payload)
        : [...openIndexes, action.payload];

    default: {
      throw new Error(`Unhandled type in accordionReducer: ${action.type}`);
    }
  }
};

function preventCloseReducer(openIndexes: number[], action: Action) {
  if (action.type === AccordionActionTypes.TOGGLE_INDEX) {
    const closing = openIndexes.includes(action.payload);
    const isLast = openIndexes.length < 2;

    if (closing && isLast) {
      return openIndexes;
    }
  }
}

function singleReducer(openIndexes: number[], action: Action) {
  if (action.type === AccordionActionTypes.TOGGLE_INDEX) {
    const closing = openIndexes.includes(action.payload);
    if (!closing) {
      return [action.payload];
    }
  }
}

function combineReducers(...reducers: any[]): AccordionReducer {
  return (state: any, action: any) => {
    for (const reducer of reducers) {
      const result = reducer(state, action);
      if (result) return result;
    }
  };
}

export {
  accordionReducer,
  combineReducers,
  preventCloseReducer,
  singleReducer,
};
