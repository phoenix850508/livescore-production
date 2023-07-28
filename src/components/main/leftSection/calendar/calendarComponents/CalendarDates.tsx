import { dateProps } from "types/types";
import clsx from "clsx";
import { useState, useContext } from "react";
import { DateContext } from "context/DateContext";
import styles from "./CalendarDates.module.scss";

export default function CalendarDates(props: dateProps) {
  const currDate = new Date();
  const firstDayOfMonth = new Date(props.year, props.monthIndex, 1).getDay();
  const lastDayOfMonth = new Date(
    props.year,
    props.monthIndex + 1,
    0
  ).getDate();
  const dates: (string | number)[] = [];
  dates.length = lastDayOfMonth;
  // whether should highlight the current date in the calendar
  const highlightCurrDate: boolean =
    currDate.getMonth() === props.monthIndex &&
    currDate.getFullYear() === props.year;
  // repplace each element of dates array with this month's date
  for (let i = 0; i <= lastDayOfMonth - 1; i++) {
    dates.splice(firstDayOfMonth + i, 1, i + 1);
  }
  // replace each element of dates array with empty string
  for (let j = firstDayOfMonth; j > 0; j--) {
    dates.splice(firstDayOfMonth - j, 1, "");
  }
  // highlight when the date gets clicked
  const [activeDate, setActiveDate] = useState<number | string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // add useReducer from the DateContext to update the latest clicked date
  const { dispatch } = useContext(DateContext);
  const handleDateClick = (
    date: number | string,
    index: number,
    props: dateProps
  ): void => {
    setActiveDate(date);
    setActiveIndex(index);
    dispatch({
      type: "change_date",
      year: props.year,
      monthIndex: props.monthIndex,
      date: Number(date),
    });
  };

  return (
    <ul className={styles.dates}>
      {dates.map((date: number | string, index: number) => {
        return date === currDate.getDate() && highlightCurrDate ? (
          <li
            key={index}
            className={styles.currDate}
            onClick={(e) => handleDateClick?.(date, index, props)}
          >
            {date}
          </li>
        ) : (
          <li
            className={clsx(
              { [styles.date]: date },
              {
                [styles.activeDate]:
                  date === activeDate && index === activeIndex,
              }
            )}
            key={index}
            onClick={(e) => {
              handleDateClick?.(date, index, props);
            }}
          >
            {date}
          </li>
        );
      })}
    </ul>
  );
}
