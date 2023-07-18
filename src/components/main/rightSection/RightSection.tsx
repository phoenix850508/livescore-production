import FeaturedMatch from "./rightSectionComponents/FeaturedMatch";
import { MatchContext } from "context/MatchContext";
import { useContext } from "react";
import { showSportType } from "types/types";
import styles from "./RightSection.module.scss";

export default function RightSection(props: showSportType) {
  return (
    <div className={styles.rightSection}>
      <div className={styles.featuredMatch}>
        <h3 className={styles.title}>Featured Match</h3>
        <FeaturedMatch showSport={props.showSport} />
      </div>
    </div>
  );
}
