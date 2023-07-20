import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./MatchTeams.module.scss";

export default function MatchTeams() {
  const navigate = useNavigate();
  const handleAwayTeamClick = () => {
    navigate("/teamInfo");
  };
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
          <img
            className={styles.logo}
            src={""}
            alt="nuggets.svg"
            onClick={handleAwayTeamClick}
          />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>108</span>
          <span>-</span>
          <span className={styles.homeScore}>111</span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>Heat</h3>
          <img className={styles.logo} src={""} alt="heats.svg" />
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
