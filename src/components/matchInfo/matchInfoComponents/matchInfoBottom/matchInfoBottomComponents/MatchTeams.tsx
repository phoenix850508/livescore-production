import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import triangleRight from "icons/triangle-right.svg";
import { useState, useEffect } from "react";
import { matchInfoObj } from "types/types";
import { useNavigate } from "react-router-dom";
import styles from "./MatchTeams.module.scss";

export default function MatchTeams(props: matchInfoObj) {
  const [matchInfoObj, setMatchInfoObj] = useState<null | matchInfoObj>(null);
  // use useState to decide whether the team is subscribed
  const [awaySubs, setAwaySubs] = useState(false);
  const [homeSubs, setHomeSubs] = useState(false);

  // toggle subscribe away team
  const handleAwayBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // if localStorage has data
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === props.awayTeam)) {
        // remove the name from array
        setAwaySubs(false);
        const arr = teamsParsed.filter(
          (teamName: string) => teamName !== props.awayTeam
        );
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setAwaySubs(true);
        teamsParsed.push(props.awayTeam);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setAwaySubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([props.awayTeam]));
    }
  };

  // toggle subscribe home team
  const handleHomeBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // if localStorage has data
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === props.homeTeam)) {
        // remove the name from array
        setHomeSubs(false);
        const arr = teamsParsed.filter(
          (teamName: string) => teamName !== props.homeTeam
        );
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setHomeSubs(true);
        teamsParsed.push(props.homeTeam);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setHomeSubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([props.homeTeam]));
    }
  };

  const navigate = useNavigate();
  const handleAwayTeamClick = () => {
    navigate(`/teamInfo/${props.awayId ? props.awayId : matchInfoObj?.awayId}`);
  };

  const handleHomeTeamClick = () => {
    navigate(`/teamInfo/${props.homeId ? props.homeId : matchInfoObj?.homeId}`);
  };

  useEffect(() => {
    // parse matchInfo data
    const matchInfoObjString = localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));

    // check whethther team is subscribed
    const subscribedTeamsString = localStorage.getItem("subscribedTeams");
    const subscribedTeams: string[] =
      subscribedTeamsString && JSON.parse(subscribedTeamsString);
    const isHomeSub = props.homeTeam
      ? subscribedTeams?.some((team) => team === props.homeTeam)
      : matchInfoObj &&
        subscribedTeams?.some((team) => team === matchInfoObj.homeTeam);
    if (isHomeSub) {
      setHomeSubs(true);
    }
    const isAwaySub = props.awayTeam
      ? subscribedTeams?.some((team) => team === props.awayTeam)
      : matchInfoObj &&
        subscribedTeams?.some((team) => team === matchInfoObj.awayTeam);
    if (isAwaySub) {
      setAwaySubs(true);
    }
  }, []);

  return (
    <div>
      <div className={styles.matchTeams}>
        <div className={styles.leagueAndDate}>
          <div className={styles.categories}>
            <span
              onClick={() =>
                props.leagueType === "nba"
                  ? navigate("/leagueInfo/nba")
                  : navigate("/leagueInfo/mlb")
              }
              className={styles.sportCategory}
            >
              {(props.leagueType
                ? props.leagueType
                : matchInfoObj?.leagueType) === "nba"
                ? "Basketball"
                : "Baseball"}
            </span>
            <img
              className={styles.triangleRight}
              src={triangleRight}
              alt="triangleRight.svg"
            />
            <span
              onClick={() =>
                props.leagueType === "nba"
                  ? navigate("/leagueInfo/nba")
                  : navigate("/leagueInfo/mlb")
              }
              className={styles.leagueCategory}
            >
              {props.league ? props.league : matchInfoObj?.league}
            </span>
            <img
              className={styles.triangleRight}
              src={triangleRight}
              alt="triangleRight.svg"
            />
          </div>
          <span className={styles.matchDate}>
            {props.date ? props.date : matchInfoObj?.date}
          </span>
        </div>
        <img
          className={styles.subscriptionStatus}
          src={awaySubs ? bellSolidIcon : bellEmptyIcon}
          alt="bellEmptyIcon.svg"
          onClick={handleAwayBellClicked}
        />
        <div className={styles.away}>
          <h3 className={styles.awayName}>
            {props.awayTeam ? props.awayTeam : matchInfoObj?.awayTeam}
          </h3>
          <img
            className={styles.logo}
            src={props.awayLogo ? props.awayLogo : matchInfoObj?.awayLogo}
            alt="awayLogo.svg"
            onClick={handleAwayTeamClick}
          />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>
            {props.awayTotal ? props.awayTotal : matchInfoObj?.awayTotal}
          </span>
          <span>-</span>
          <span className={styles.homeScore}>
            {props.homeTotal ? props.homeTotal : matchInfoObj?.homeTotal}
          </span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>
            {props.homeTeam ? props.homeTeam : matchInfoObj?.homeTeam}
          </h3>
          <img
            className={styles.logo}
            src={props.homeLogo ? props.homeLogo : matchInfoObj?.homeLogo}
            alt="homeLogo.svg"
            onClick={handleHomeTeamClick}
          />
        </div>
        <img
          className={styles.subscriptionStatus}
          src={homeSubs ? bellSolidIcon : bellEmptyIcon}
          alt="bellEmptyIcon.svg"
          onClick={handleHomeBellClicked}
        />
      </div>
    </div>
  );
}
