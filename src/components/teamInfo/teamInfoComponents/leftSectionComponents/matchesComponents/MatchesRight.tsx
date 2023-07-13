import bucks from "icons/nbaEastTeams/milwaukee-bucks.svg";
import nuggets from "icons/nbaWestTeams/denver-nuggets.svg";
import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";

import styles from "./MatchesRight.module.scss";

export default function MatchesRight() {
  return (
    <div className={styles.matchesRight}>
      <div className={styles.title}>Upcoming match</div>
      <div className={styles.matchTeams}>
        <div className={styles.awayTeam}>
          <img
            className={styles.subscriptionStatus}
            src={bellEmptyIcon}
            alt="bellEmptyIcon.svg"
          />
          <div className={styles.teamWrapper}>
            <div className={styles.teamName}>Bucks</div>
            <img className={styles.teamLogo} src={bucks} alt="bucks.svg" />
          </div>
        </div>
        <div className={styles.matchSchedule}>
          <div className={styles.matchCountDown}>In 2 days</div>
          <div className={styles.matchTime}>08/07/2023 05:00</div>
        </div>
        <div className={styles.homeTeam}>
          <div className={styles.teamWrapper}>
            <div className={styles.teamName}>Nuggets</div>
            <img className={styles.teamLogo} src={nuggets} alt="nuggets.svg" />
          </div>
          <img
            className={styles.subscriptionStatus}
            src={bellEmptyIcon}
            alt="bellEmptyIcon.svg"
          />
        </div>
      </div>
    </div>
  );
}
