import nuggets from "icons/nbaWestTeams/denver-nuggets.svg";
import usa from "icons/usaIcon.svg";
import bellEmpty from "icons/bellEmptyIcon.svg";
import bellSolid from "icons/bellSolidIcon.svg";
import styles from "./TeamInfoTop.module.scss";

export default function TeamInfoTop() {
  return (
    <div className={styles.teamInfoTop}>
      <div className={styles.logoTitleWrapper}>
        <img className={styles.teamLogo} src={nuggets} alt="nuggets.svg" />
        <div className={styles.teamNameWrapper}>
          <div className={styles.teamTitle}>Denver Nuggets</div>
          <div className={styles.teamLocation}>
            <img className={styles.locationLogo} src={usa} alt="usaIcon.svg" />
            <div className={styles.locationName}>United States</div>
          </div>
        </div>
      </div>
      <div className={styles.subscriptionWrapper}>
        <div className={styles.follow}>FOLLOW</div>
        <img
          className={styles.subscriptionBell}
          src={bellEmpty}
          alt="bellEmptyIcon.svg"
        />
      </div>
    </div>
  );
}
