import styles from "./MatchLeftMatchItem.module.scss";

export default function MatchLeftMatchItem() {
  return (
    <div className={styles.matchLeftMatchItem}>
      <div className={styles.matchSchedule}>
        <div className={styles.matchTime}>12:30</div>
        <div className={styles.matchProgress}>4in</div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>Yankees</div>
          <div className={styles.home}>Orioles</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
            <div>8</div>
          </div>
          <div className={styles.homeScore}>
            <div>4</div>
            <div>4</div>
            <div>4</div>
            <div>4</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
