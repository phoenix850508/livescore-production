import { initDateState, actionType } from "types/types";

export default function dateReducer(date: initDateState, action: actionType) {
  switch (action.type) {
    case "change_date":
      return {
        ...date,
        year: action.year,
        monthIndex: action.monthIndex,
        date: action.date,
      };
  }
}
