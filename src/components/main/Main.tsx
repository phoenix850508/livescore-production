import LeftSection from "./leftSection/LeftSection";
import MiddleSection from "./middleSection/MiddleSection";
import RightSection from "./rightSection/RightSection";
import {
  showSportType,
  showFavorites,
  onCalendarClick,
  onLeagueIconClick,
} from "types/types";
import styles from "./Main.module.scss";

interface combinedType
  extends showFavorites,
    showSportType,
    onCalendarClick,
    onLeagueIconClick {}

export default function Main(props: combinedType) {
  return (
    <div className={styles.main}>
      <LeftSection
        showCalendar={props.showCalendar}
        onLeagueIconClick={props.onLeagueIconClick}
        showLeagueAll={props.showLeagueAll}
      />
      <MiddleSection
        showSport={props.showSport}
        showFavorites={props.showFavorites}
      />
      <RightSection showSport={props.showSport} />
    </div>
  );
}
