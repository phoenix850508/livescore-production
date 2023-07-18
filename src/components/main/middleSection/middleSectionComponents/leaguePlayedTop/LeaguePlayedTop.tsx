import mlbIcon from "icons/mlbIcon.svg";
import nbaIcon from "icons/nbaIcon.svg";
import { allGamesProps } from "types/types";
import styles from "./LeaguePlayedTop.module.scss";

export default function LeaguePlayedTop(props: allGamesProps) {
  return (
    <div className={styles.leaguePlayedTop}>
      <div className={styles.leagueInfo}>
        <img src={props.nbaGames ? nbaIcon : mlbIcon} alt="leagueIcon.svg" />
        <div className={styles.leagueTitle}>
          <span className={styles.leagueLocation}>USA</span>
          <span className={styles.leagueName}>
            {props.nbaGames ? "NBA" : "MLB"}
          </span>
        </div>
      </div>
      <div className={styles.boxScore}>Box Score</div>
    </div>
  );
}
