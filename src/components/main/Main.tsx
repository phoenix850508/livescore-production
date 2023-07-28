import LeftSection from "./leftSection/LeftSection";
import MiddleSection from "./middleSection/MiddleSection";
import RightSection from "./rightSection/RightSection";
import {
  showSportType,
  showFavorites,
  onCalendarClick,
  onLeagueCupClick,
  onFavoritesClick,
  middleSecRef,
} from "types/types";
import styles from "./Main.module.scss";

interface combinedType
  extends showFavorites,
    showSportType,
    onCalendarClick,
    onLeagueCupClick,
    onFavoritesClick,
    middleSecRef {}

export default function Main(props: combinedType) {
  return (
    <div className={styles.main}>
      <LeftSection
        showCalendar={props.showCalendar}
        onLeagueCupClick={props.onLeagueCupClick}
        showMobileIcon={props.showMobileIcon}
        calendarRef={props.calendarRef}
      />
      <MiddleSection
        showSport={props.showSport}
        showFavorites={props.showFavorites}
        middleSecRef={props.middleSecRef}
      />
      <RightSection showSport={props.showSport} />
    </div>
  );
}
