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
  state: {
    year: defaultDate.year,
    monthIndex: defaultDate.monthIndex,
    date: defaultDate.date,
  },
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
