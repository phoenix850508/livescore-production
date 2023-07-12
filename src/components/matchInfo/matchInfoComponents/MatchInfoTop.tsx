import triangleRight from "icons/triangle-right.svg";
import styles from "./MatchInfoTop.module.scss";

export default function MathInfoTop() {
  return (
    <div className={styles.matchInfoTop}>
      <div className={styles.leagueAndDate}>
        <div className={styles.categories}>
          <a href="/main" className={styles.sportCategory}>
            Basketball
          </a>
          <img
            className={styles.triangleRight}
            src={triangleRight}
            alt="triangleRight.svg"
          />
          <a href="/leagueInfo" className={styles.leagueCategory}>
            National Basketball Association
          </a>
        </div>
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
