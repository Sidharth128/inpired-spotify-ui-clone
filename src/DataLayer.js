import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext(); //prepares a datalayer

export const DataLayer = ({ initialState, reducer, children}) => (
  <DataLayerContext.Provider value={useReducer(reducer,initialState)} >
    {children}
  </DataLayerContext.Provider> 
);

export const useDataLayerValue = () => useContext(DataLayerContext);
//the way to get either value from data layer or to spatch an action to it