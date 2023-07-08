import { dateProps } from "types/types";
import clsx from "clsx";
import { useState } from "react";
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
  // identify the date gets clicked
  const [activeDate, setActiveDate] = useState<number | string | null>(null);
  const handleDateClick = (
    e: React.MouseEvent<HTMLLIElement>,
    date: number | string
  ): void => {
    setActiveDate(date);
  };

  return (
    <ul className={styles.dates}>
      {dates.map((date: number | string, index: number) => {
        return date === currDate.getDate() && highlightCurrDate ? (
          <li key={index} className={styles.currDate}>
            {date}
          </li>
        ) : (
          <li
            className={clsx(
              { [styles.date]: date },
              { [styles.activeDate]: date === activeDate }
            )}
            key={index}
            onClick={(e) => handleDateClick(e, date)}
          >
            {date}
          </li>
        );
      })}
    </ul>
  );
}
