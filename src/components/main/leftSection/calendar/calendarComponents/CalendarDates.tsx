import { dateProps } from "types/types";
import styles from "./CalendarDates.module.scss";

export default function CalendarDates(props: dateProps) {
  const currDate = new Date();
  const highlightDate: boolean =
    currDate.getMonth() === props.monthIndex &&
    currDate.getFullYear() === props.year;
  const firstDayOfMonth = new Date(props.year, props.monthIndex, 1).getDay();
  const lastDayOfMonth = new Date(
    props.year,
    props.monthIndex + 1,
    0
  ).getDate();
  const dates: (string | number)[] = [];
  dates.length = lastDayOfMonth;
  // repplace each element of dates array with this month's date
  for (let i = 0; i <= lastDayOfMonth - 1; i++) {
    dates.splice(firstDayOfMonth + i, 1, i + 1);
  }
  // replace each element of dates array with empty string
  for (let j = firstDayOfMonth; j > 0; j--) {
    dates.splice(firstDayOfMonth - j, 1, "");
  }
  return (
    <ul className={styles.dates}>
      {dates.map((date: number | string, index: number) => {
        return date === currDate.getDate() && highlightDate ? (
          <li key={index} className={styles.currDate}>
            {date}
          </li>
        ) : (
          <li key={index}>{date}</li>
        );
      })}
    </ul>
  );
}
