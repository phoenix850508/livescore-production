import Calendar from "./calendar/Calendar";
import LeaguesAll from "./leagues/LeaguesAll";
import { onCalendarClick, onLeagueIconClick } from "types/types";
import styles from "./LeftSection.module.scss";

interface combinedTypes extends onCalendarClick, onLeagueIconClick {}
export default function LeftSection(props: combinedTypes) {
  return (
    <div className={styles.leftSection}>
      <Calendar showCalendar={props.showCalendar} />
      <LeaguesAll
        onLeagueIconClick={props.onLeagueIconClick}
        showLeagueAll={props.showLeagueAll}
      />
    </div>
  );
}
