import styles from "./CalendarDays.module.scss";

export default function CalendarDays() {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return (
    <ul className={styles.days}>
      {days.map((day: string, index: number) => {
        return <li key={index}>{day}</li>;
      })}
    </ul>
  );
}
