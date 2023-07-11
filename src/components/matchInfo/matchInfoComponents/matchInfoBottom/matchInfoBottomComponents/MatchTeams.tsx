import heats from "icons/nbaEastTeams/miami-heat.svg";
import nuggets from "icons/nbaWestTeams/denver-nuggets.svg";
import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import styles from "./MatchTeams.module.scss";

export default function MatchTeams() {
  return (
    <div>
      <div className={styles.matchTeams}>
        <img
          className={styles.subscriptionStatus}
          src={bellEmptyIcon}
          alt="bellEmptyIcon.svg"
        />
        <div className={styles.away}>
          <h3 className={styles.awayName}>Nuggets</h3>
          <img className={styles.logo} src={nuggets} alt="nuggets.svg" />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>108</span>
          <span>-</span>
          <span className={styles.homeScore}>111</span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>Heat</h3>
          <img className={styles.logo} src={heats} alt="heats.svg" />
        </div>
        <img
          className={styles.subscriptionStatus}
          src={bellEmptyIcon}
          alt="bellEmptyIcon.svg"
        />
      </div>
    </div>
  );
}
