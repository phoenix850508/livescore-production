import React, { createContext, useReducer } from "react";
import seasonReducer from "reducer/seasonReducer";
import { initSeason, seasonActionType } from "types/types";

const date = new Date();
const currYear = date.getFullYear();
const defaultSeason = { season: currYear.toString() };

const SeasonContext = createContext<{
  season: initSeason;
  dispatch: React.Dispatch<seasonActionType>;
}>({
  season: defaultSeason,
  dispatch: () => {},
});
const SeasonContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [season, dispatch] = useReducer<
    React.Reducer<initSeason, seasonActionType>
  >(seasonReducer, defaultSeason);
  return (
    <SeasonContext.Provider value={{ season, dispatch }}>
      {children}
    </SeasonContext.Provider>
  );
};

export { SeasonContext, SeasonContextProvider };
