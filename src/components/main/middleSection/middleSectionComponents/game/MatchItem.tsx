import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import styles from "./MatchItem.module.scss";

export default function MatchItem() {
  return (
    <div className={styles.matchItem}>
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
          <div className={styles.awayScore}>8</div>
          <div className={styles.homeScore}>4</div>
        </div>
      </div>
      <div className={styles.subscriptions}>
        <div className={styles.awayBell}>
          <img src={bellSolidIcon} alt="bellSolidIcon.svg" />
        </div>
        <div className={styles.homeBell}>
          <img src={bellEmptyIcon} alt="bellEmptyIcon.svg" />
        </div>
      </div>
    </div>
  );
}
