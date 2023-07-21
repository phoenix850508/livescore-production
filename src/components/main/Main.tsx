import LeftSection from "./leftSection/LeftSection";
import MiddleSection from "./middleSection/MiddleSection";
import RightSection from "./rightSection/RightSection";
import { showSportType, showFavorites } from "types/types";
import styles from "./Main.module.scss";

interface combinedType extends showFavorites, showSportType {}

export default function Main(props: combinedType) {
  return (
    <div className={styles.main}>
      <LeftSection />
      <MiddleSection
        showSport={props.showSport}
        showFavorites={props.showFavorites}
      />
      <RightSection showSport={props.showSport} />
    </div>
  );
}
