import mlbIcon from "icons/mlbIcon.svg";
import { allGamesProps } from "types/types";
import styles from "./LeaguePlayedTop.module.scss";

export default function LeaguePlayedTop(nbaGames: allGamesProps) {
  return (
    <div className={styles.leaguePlayedTop}>
      <div className={styles.leagueInfo}>
        <img src={mlbIcon} alt="leagueIcon.svg" />
        <div className={styles.leagueTitle}>
          <span className={styles.leagueLocation}>USA</span>
          <span className={styles.leagueName}>MLB</span>
        </div>
      </div>
      <div className={styles.boxScore}>Box Score</div>
    </div>
  );
}
