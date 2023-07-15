import dateReducer from "reducer/dateReducer";
import { dateState, actionType } from "types/types";
import React, { createContext, useReducer } from "react";

const currDate = new Date();

const defaultDate = {
  yearNew: currDate.getFullYear(),
  monthIndexNew: currDate.getMonth(),
  dateNew: currDate.getDate(),
};

const DateContext = createContext<{
  state: dateState;
  dispatch: React.Dispatch<actionType>;
}>({
  state: { yearNew: 2023, monthIndexNew: 6, dateNew: 15 },
  dispatch: () => {},
});
const DateContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<React.Reducer<dateState, actionType>>(
    dateReducer,
    defaultDate
  );
  return (
    <DateContext.Provider value={{ state, dispatch }}>
      {children}
    </DateContext.Provider>
  );
};

export { DateContext, DateContextProvider };
