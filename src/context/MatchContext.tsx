import { initMatchType, matchActionType } from "types/types";
import matchReducer from "reducer/matchReducer";
import React, { createContext, useReducer } from "react";

const defaultMatch = {
  awayTeam: {
    nickname: "",
    id: 0,
    logo: "",
  },
  homeTeam: {
    nickname: "",
    id: 0,
    logo: "",
  },
  scores: {
    awayTotal: "",
    homeTotal: "",
  },
  leagueType: "",
  id: 0,
};

const MatchContext = createContext<{
  match: initMatchType;
  dispatch: React.Dispatch<matchActionType>;
}>({
  match: {
    awayTeam: {
      nickname: "",
      id: 0,
      logo: "",
    },
    homeTeam: {
      nickname: "",
      id: 0,
      logo: "",
    },
    scores: {
      awayTotal: 0,
      homeTotal: 0,
    },
    leagueType: "",
    id: 0,
  },
  dispatch: () => {},
});

const MatchContextProvider = ({ children }: any) => {
  const [match, dispatch] = useReducer<
    React.Reducer<initMatchType, matchActionType>
  >(matchReducer, defaultMatch);
  return (
    <MatchContext.Provider value={{ match, dispatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchContextProvider };
