import { initMatchType, matchActionType } from "types/types";
import matchReducer from "reducer/matchReducer";
import React, { createContext, useReducer } from "react";

const defaultMatch = {
  awayTeam: {
    nickname: "away",
    id: 0,
  },
  homeTeam: {
    nickname: "home",
    id: 0,
  },
  scores: {
    awayTotal: "",
    homeTotal: "",
  },
};

const MatchContext = createContext<{
  match: initMatchType;
  dispatch: React.Dispatch<matchActionType>;
}>({
  match: {
    awayTeam: {
      nickname: "away",
      id: 0,
    },
    homeTeam: {
      nickname: "home",
      id: 0,
    },
    scores: {
      awayTotal: 0,
      homeTotal: 0,
    },
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
