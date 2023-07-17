import yankees from "icons/mlbALTeams/new-york-yankees.svg";
import orioles from "icons/mlbALTeams/baltimore-orieles.svg";
import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import { useNavigate } from "react-router-dom";
import { getTeam } from "api/nba";
import styles from "./FeaturedMatch.module.scss";

export default function FeaturedMatch() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/match");
  };
  const { match } = useContext(MatchContext);
  // extract the latest/selected match information
  const awayTeam = match.awayTeam;
  const homeTeam = match.homeTeam;
  const scores = match.scores;
  // use useState to memorize the teams logo
  const [awayTeamLogo, setAwayTeamLogo] = useState(
    "https://www.svgrepo.com/show/133513/shield.svg"
  );
  const [homeTeamLogo, setHomeTeamLogo] = useState(
    "https://www.svgrepo.com/show/133513/shield.svg"
  );

  useEffect(() => {
    const asyncGetTeam = async () => {
      if (awayTeam?.id) {
        const response = awayTeam && (await getTeam(awayTeam?.id));
        setAwayTeamLogo(response?.data[0].response.logo);
      }
    };
    asyncGetTeam();
  }, [awayTeam]);

  useEffect(() => {
    const asyncGetTeam = async () => {
      if (homeTeam?.id) {
        const response = homeTeam && (await getTeam(homeTeam?.id));
        setHomeTeamLogo(response?.data[0].response.logo);
      }
    };
    asyncGetTeam();
  }, [homeTeam]);
  return (
    <div className={styles.featuredMatch} onClick={handleClick}>
      <div className={styles.matchInfo}>
        <div className={styles.away}>
          <h3 className={styles.awayName}>{awayTeam?.nickname}</h3>
          <img className={styles.logo} src={awayTeamLogo} alt="awayTeam.svg" />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>{scores?.awayTotal}</span>
          <span>-</span>
          <span className={styles.homeScore}>{scores?.homeTotal}</span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>{homeTeam?.nickname}</h3>
          <img className={styles.logo} src={homeTeamLogo} alt="homeTeam.svg" />
        </div>
      </div>
    </div>
  );
}
