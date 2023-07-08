import { useState } from "react";
import CalendarTitle from "./calendarComponents/CalendarTitle";
import CalendarDays from "./calendarComponents/CalendarDays";
import CalendarDates from "./calendarComponents/CalendarDates";
import styles from "./Calendar.module.scss";

export default function Calendar() {
  const currDate = new Date();
  const [month, setMonth] = useState(currDate.getMonth());
  const [year, setYear] = useState(currDate.getFullYear());
  const handlePrevClick = (e: React.MouseEvent<HTMLImageElement>): void => {
    setMonth((month) => month - 1);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    }
  };
  const handleNextClick = (e: React.MouseEvent<HTMLImageElement>): void => {
    setMonth((month) => month + 1);
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    }
  };
  return (
    <div className={styles.calendar}>
      <CalendarTitle
        monthIndex={month}
        year={year}
        prevClick={handlePrevClick}
        nextClick={handleNextClick}
      />
      <CalendarDays />
      <CalendarDates monthIndex={month} year={year} />
    </div>
  );
}
