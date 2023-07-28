import FeaturedMatch from "./rightSectionComponents/FeaturedMatch";
import { showSportType, onMobileIcon } from "types/types";
import clsx from "clsx";
import styles from "./RightSection.module.scss";

interface combinedTypes extends showSportType, onMobileIcon {}
export default function RightSection(props: combinedTypes) {
  return (
    <div
      className={clsx(
        { [styles.noShow]: props.showMobileIcon === "leagues" },
        styles.rightSection
      )}
    >
      <div className={styles.featuredMatch}>
        <h3 className={styles.title}>Featured Match</h3>
        <FeaturedMatch showSport={props.showSport} />
      </div>
    </div>
  );
}
