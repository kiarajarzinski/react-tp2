import { createContext, useState, useContext, useReducer } from "react";
export const MakeupContext = createContext();

const initialState = {
    makeups: []
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_MAKEUPS":
      return { ...state, makeups: action.payload };
    case "ADD_MAKEUP":
      return { ...state, makeups: [...state.makeups, action.payload] };
    case "DELETE_MAKEUP":
      return { ...state, makeups: state.makeups.filter(m => m.id !== action.payload) };
    case "UPDATE_MAKEUP":
      return {
        ...state,
        makeups: state.makeups.map(m => m.id === action.payload.id ? action.payload : m)
      };
    default:
      return state;
  }
}

export function MakeupProvider({ children }) {
const [state, dispatch] = useReducer(reducer, initialState);
return ( <MakeupContext.Provider value={{ state, dispatch }}>
{children}
</MakeupContext.Provider>
);
}
export function useMakeup() {
  return useContext(MakeupContext);
}

