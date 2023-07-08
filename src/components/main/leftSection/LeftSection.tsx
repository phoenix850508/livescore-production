import Calendar from "./calendar/Calendar";
import LeaguesAll from "./leagues/LeaguesAll";
import styles from "./LeftSection.module.scss";

export default function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <Calendar />
      <LeaguesAll />
    </div>
  );
}
