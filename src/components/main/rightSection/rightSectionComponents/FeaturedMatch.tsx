import yankees from "icons/mlbALTeams/new-york-yankees.svg";
import orioles from "icons/mlbALTeams/baltimore-orieles.svg";
import { useNavigate } from "react-router-dom";
import styles from "./FeaturedMatch.module.scss";

export default function FeaturedMatch() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/match");
  };
  return (
    <div className={styles.featuredMatch} onClick={handleClick}>
      <div className={styles.matchInfo}>
        <div className={styles.away}>
          <h3 className={styles.awayName}>Yankees</h3>
          <img
            className={styles.logo}
            src={yankees}
            alt="new-york-yankees.svg"
          />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>8</span>
          <span>-</span>
          <span className={styles.homeScore}>4</span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>Orioles</h3>
          <img
            className={styles.logo}
            src={orioles}
            alt="baltimire-orioles.svg"
          />
        </div>
      </div>
    </div>
  );
}
