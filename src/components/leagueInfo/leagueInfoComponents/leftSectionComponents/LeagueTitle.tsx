import nbaIcon from "icons/nbaIcon.svg";
import mlbIcon from "icons/mlbIcon.svg";
import usaIcon from "icons/usaIcon.svg";
import styles from "./LeagueTitle.module.scss";

export default function LeagueTitle() {
  return (
    <div className={styles.leagueTitle}>
      <img className={styles.leagueLogo} src={nbaIcon} alt="nbaIcon.svg" />
      <div className={styles.titleRight}>
        <div className={styles.titleName}>National Basketball Association</div>
        <div className={styles.location}>
          <img
            className={styles.locationLogo}
            src={usaIcon}
            alt="usaIcon.svg"
          />
          <div className={styles.locationName}>United States</div>
        </div>
      </div>
    </div>
  );
}
