import leftArrowIcon from "icons/leftArrowIcon.svg";
import rightArrowIcon from "icons/rightArrowIcon.svg";
import { dateProps } from "types/types";
import styles from "./CalendarTitle.module.scss";

export default function CalendarTitle(props: dateProps) {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={styles.calendarTitle}>
      <img
        className={styles.arrowIcon}
        src={leftArrowIcon}
        alt="leftArrowIcon.svg"
        onClick={props.prevClick}
      />
      <h2>
        {months[props.monthIndex]} {props.year}
      </h2>
      <img
        className={styles.arrowIcon}
        src={rightArrowIcon}
        alt="rightArrowIcon.svg"
        onClick={props.nextClick}
      />
    </div>
  );
}
