import React, { createContext, useReducer } from "react";
import seasonReducer from "reducer/seasonReducer";
import { initSeason, seasonActionType } from "types/types";

const defaultSeason = { season: "2022" };

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
