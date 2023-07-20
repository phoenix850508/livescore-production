import BOS from "icons/mlbALTeams/boston-red-sox-logo.svg";
import ATL from "icons/mlbNLTeams/atlanta-braves.svg";
import NYM from "icons/mlbNLTeams/new-york-mets.svg";
import CIN from "icons/mlbNLTeams/cincinnati-reds.svg";
import TOR from "icons/mlbALTeams/toronto-blue-jays.svg";
import PHI from "icons/mlbNLTeams/philadelphia-phillies.svg";
import MIA from "icons/mlbNLTeams/miami-marlins-primary.svg";
import ARI from "icons/mlbNLTeams/arizona-diamondbacks.svg";
import LAD from "icons/mlbNLTeams/los-angeles-dodgers.svg";
import MIL from "icons/mlbNLTeams/milwaukee-brewers.svg";
import TB from "icons/mlbALTeams/tampa-bay-rays.svg";
import SEA from "icons/mlbALTeams/seattle-mariners.svg";
import CHW from "icons/mlbALTeams/chicago-white-sox.svg";
import KC from "icons/mlbALTeams/kansas-city-royals.svg";
import OAK from "icons/mlbALTeams/oakland-athletics.svg";
import NYY from "icons/mlbALTeams/new-york-yankees.svg";
import COL from "icons/mlbNLTeams/colorado-rockies.svg";
import PIT from "icons/mlbNLTeams/pittsburgh-pirates.svg";
import SD from "icons/mlbNLTeams/san-diego-padres.svg";
import MIN from "icons/mlbALTeams/minnesota-twins.svg";
import DET from "icons/mlbALTeams/detroit-tigers.svg";
import CLE from "icons/mlbALTeams/cleveland-guardians.svg";
import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import { useNavigate } from "react-router-dom";
import { getTeam } from "api/nba";
import { showSportType } from "types/types";
import styles from "./FeaturedMatch.module.scss";

export default function FeaturedMatch(props: showSportType) {
  // just temporarily shows some logo for better view (will figure out other ways later)
  const mlbLogo = [
    BOS,
    "BOS",
    ATL,
    "ATL",
    NYM,
    "NYM",
    CIN,
    "CIN",
    TOR,
    "TOR",
    PHI,
    "PHI",
    MIA,
    "MIA",
    ARI,
    "ARI",
    LAD,
    "LAD",
    MIL,
    "MIL",
    TB,
    "TB",
    SEA,
    "SEA",
    CHW,
    "CHW",
    KC,
    "KC",
    OAK,
    "OAK",
    NYY,
    "NYY",
    COL,
    "COL",
    PIT,
    "PIT",
    SD,
    "SD",
    MIN,
    "MIN",
    DET,
    "DET",
    CLE,
    "CLE",
  ];
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
  const defaultLogo = "https://www.svgrepo.com/show/133513/shield.svg";
  const [awayTeamLogo, setAwayTeamLogo] = useState(defaultLogo);
  const [homeTeamLogo, setHomeTeamLogo] = useState(defaultLogo);

  // get team logo
  useEffect(() => {
    const asyncGetTeam = async () => {
      // if homeTeam data exists, and the data is from nba (which its name is more than 3 words)
      if (
        awayTeam?.id &&
        awayTeam?.nickname &&
        awayTeam?.nickname?.length > 3
      ) {
        const response = awayTeam && (await getTeam(awayTeam?.id));
        setAwayTeamLogo(response?.data[0].response.logo);
      } else {
        const logo = `${awayTeam?.nickname}`;
        let index: number | null = null;
        for (let i = 0; i < mlbLogo.length; i++) {
          if (logo === mlbLogo[i]) {
            index = i;
          }
        }
        setAwayTeamLogo(index ? mlbLogo[index - 1] : defaultLogo);
      }
    };
    asyncGetTeam();
  }, [awayTeam, props?.showSport, mlbLogo]);

  useEffect(() => {
    const asyncGetTeam = async () => {
      // if homeTeam data exists, and the data is from nba (which its name is more than 3 words)
      if (
        homeTeam?.id &&
        homeTeam?.nickname &&
        homeTeam?.nickname?.length > 3
      ) {
        const response = homeTeam && (await getTeam(homeTeam?.id));
        setHomeTeamLogo(response?.data[0].response.logo);
      } else {
        const logo = `${homeTeam?.nickname}`;
        let index: number | null = null;
        for (let i = 0; i < mlbLogo.length; i++) {
          if (logo === mlbLogo[i]) {
            index = i;
          }
        }
        setHomeTeamLogo(index ? mlbLogo[index - 1] : defaultLogo);
      }
    };
    asyncGetTeam();
  }, [homeTeam, props?.showSport, mlbLogo]);
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
