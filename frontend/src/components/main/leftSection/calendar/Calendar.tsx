import { useState, useContext, useRef } from "react";
import { DateContext } from "context/DateContext";
import CalendarTitle from "./calendarComponents/CalendarTitle";
import CalendarDays from "./calendarComponents/CalendarDays";
import CalendarDates from "./calendarComponents/CalendarDates";
import { onCalendarClick } from "types/types";
import clsx from "clsx";
import styles from "./Calendar.module.scss";

export default function Calendar(props: onCalendarClick) {
  const { dispatch } = useContext(DateContext);
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

  // highlight when the date gets clicked
  const activeDateRef = useRef<number | string | null | undefined>(null);
  const activeMonthRef = useRef<number | string | null | undefined>(null);

  // if localStorage has selected date
  const storedDatObjString = localStorage.getItem("selectedDate");
  const storedDateObj = storedDatObjString && JSON.parse(storedDatObjString);
  if (storedDateObj) {
    activeDateRef.current = storedDateObj.activeDate;
    activeMonthRef.current = storedDateObj.activeMonth;
  }

  const handleDateClick = (date: number | string) => {
    activeMonthRef.current = month;
    activeDateRef.current = date;
    localStorage.setItem(
      "selectedDate",
      JSON.stringify({ activeMonth: month, activeDate: date })
    );
    dispatch({
      type: "change_date",
      year: year,
      monthIndex: month,
      date: Number(date),
    });
  };

  return (
    <div
      className={clsx(
        { [styles.noShow]: !props.showCalendar },
        styles.calendar
      )}
      ref={props.calendarRef}
    >
      <CalendarTitle
        monthIndex={month}
        year={year}
        prevClick={handlePrevClick}
        nextClick={handleNextClick}
      />
      <CalendarDays />
      <CalendarDates
        monthIndex={month}
        year={year}
        onDateClick={handleDateClick}
        activeDate={activeDateRef.current}
        activeMonth={activeMonthRef.current}
      />
    </div>
  );
}
