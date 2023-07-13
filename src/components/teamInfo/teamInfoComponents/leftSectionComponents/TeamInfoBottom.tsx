import MatchesLeft from "./matchesComponents/MatchesLeft";
import MatchesRight from "./matchesComponents/MatchesRight";
import styles from "./TeamInfoBottom.module.scss";

export default function TeamInfoBottom() {
  return (
    <div className={styles.teamInfoBottom}>
      <div className={styles.title}>Matches</div>
      <div className={styles.matches}>
        <MatchesLeft />
        <MatchesRight />
      </div>
    </div>
  );
}
