import Calendar from "./calendar/Calendar";
import LeaguesAll from "./leagues/LeaguesAll";
import { onCalendarClick, onMobileIcon } from "types/types";
import styles from "./LeftSection.module.scss";

interface combinedTypes extends onCalendarClick, onMobileIcon {}
export default function LeftSection(props: combinedTypes) {
  return (
    <div className={styles.leftSection}>
      <Calendar
        showCalendar={props.showCalendar}
        calendarRef={props.calendarRef}
      />
      <LeaguesAll
        onLeagueCupClick={props.onLeagueCupClick}
        showMobileIcon={props.showMobileIcon}
      />
    </div>
  );
}
