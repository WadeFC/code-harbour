import {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = createContext({children, intialState,reducer}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);

export const useStateProvider = useContext(StateContext);