import FeaturedMatch from "components/main/rightSection/rightSectionComponents/FeaturedMatch";
import nbaIcon from "icons/nbaIcon.svg";
import mlbIcon from "icons/mlbIcon.svg";
import styles from "./RightSection.module.scss";

export default function RightSection() {
  return (
    <div className={styles.rightSection}>
      <h3 className={styles.title}>Featured Match</h3>
      <div className={styles.matchLeague}>
        <img className={styles.leagueIcon} src={nbaIcon} alt="nbaIcon.svg" />
        <div className={styles.matchTitle}>
          <span className={styles.leagueName}>
            National Basketball Association
          </span>
          <span className={styles.matchDate}>2023/06/05</span>
        </div>
      </div>
      <FeaturedMatch />
    </div>
  );
}
