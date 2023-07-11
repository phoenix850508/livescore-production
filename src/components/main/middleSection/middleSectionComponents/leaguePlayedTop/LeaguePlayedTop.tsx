import mlbIcon from "icons/mlbIcon.svg";
import nbaIcon from "icons/nbaIcon.svg";
import styles from "./LeaguePlayedTop.module.scss";

export default function LeaguePlayedTop() {
  return (
    <div className={styles.leaguePlayedTop}>
      <div className={styles.leagueInfo}>
        <img src={mlbIcon} alt="mlbIcon.svg" />
        <div className={styles.leagueTitle}>
          <span className={styles.leagueLocation}>USA</span>
          <span className={styles.leagueName}>MLB</span>
        </div>
      </div>
      <div className={styles.boxScore}>Box Score</div>
    </div>
  );
}
