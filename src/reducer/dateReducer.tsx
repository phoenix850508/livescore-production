import { dateState, actionType } from "types/types";

export default function dateReducer(date: dateState, action: actionType) {
  switch (action.type) {
    case "change_year":
      return {
        ...date,
        selectedYear: date.yearNew,
      };
    case "change_monthIndex":
      return {
        ...date,
        selectedMonthIndex: date.monthIndexNew,
      };
    case "change_date":
      return {
        ...date,
        selectedDate: date.dateNew,
      };
  }
}
