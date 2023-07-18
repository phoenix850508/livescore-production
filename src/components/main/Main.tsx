import LeftSection from "./leftSection/LeftSection";
import MiddleSection from "./middleSection/MiddleSection";
import RightSection from "./rightSection/RightSection";
import { MatchContextProvider } from "context/MatchContext";
import { showSportType } from "types/types";
import styles from "./Main.module.scss";

export default function Main(props: showSportType) {
  return (
    <div className={styles.main}>
      <MatchContextProvider>
        <LeftSection />
        <MiddleSection
          showSport={props.showSport}
          showFavorites={props.showFavorites}
        />
        <RightSection showSport={props.showSport} />
      </MatchContextProvider>
    </div>
  );
}
