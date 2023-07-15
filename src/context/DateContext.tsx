import dateReducer from "reducer/dateReducer";
import { initDateState, actionType } from "types/types";
import React, { createContext, useReducer } from "react";

const currDate = new Date();

const defaultDate = {
  year: currDate.getFullYear(),
  monthIndex: currDate.getMonth(),
  date: currDate.getDate(),
};

const DateContext = createContext<{
  state: initDateState;
  dispatch: React.Dispatch<actionType>;
}>({
  state: { year: 2023, monthIndex: 6, date: 15 },
  dispatch: () => {},
});
const DateContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<
    React.Reducer<initDateState, actionType>
  >(dateReducer, defaultDate);
  return (
    <DateContext.Provider value={{ state, dispatch }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateContextProvider };
