import styles from "./MatchInfoTop.module.scss";

export default function MathInfoTop() {
  return (
    <div className={styles.matchInfoToop}>
      <div className={styles.leagueDate}>
        <span className={styles.legueName}>
          National Basketball Association
        </span>
        <span className={styles.matchDate}>2023/06/25</span>
      </div>
      <div className={styles.matchTitle}>
        <div className={styles.away}>Denver Nuggets</div>
        <div>-</div>
        <div className={styles.home}>Miami Heat</div>
      </div>
    </div>
  );
}
