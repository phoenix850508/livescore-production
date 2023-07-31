import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import triangleRight from "icons/triangle-right.svg";
import { useState, useEffect } from "react";
import { matchInfoObj } from "types/types";
import { useNavigate } from "react-router-dom";
import styles from "./MatchTeams.module.scss";

export default function MatchTeams(props: matchInfoObj) {
  const [matchInfoObj, setMatchInfoObj] = useState<null | matchInfoObj>(null);
  // check whethther team is subscribed
  const subscribedTeamsString = localStorage.getItem("subscribedTeams");
  const subscribedTeams: string[] =
    subscribedTeamsString && JSON.parse(subscribedTeamsString);
  const isHomeSub = props.homeTeam
    ? subscribedTeams?.some((team) => team === props.homeTeam)
    : matchInfoObj &&
      subscribedTeams?.some((team) => team === matchInfoObj.homeTeam);
  const isAwaySub = props.awayTeam
    ? subscribedTeams?.some((team) => team === props.awayTeam)
    : matchInfoObj &&
      subscribedTeams?.some((team) => team === matchInfoObj.awayTeam);

  const navigate = useNavigate();
  const handleAwayTeamClick = () => {
    navigate("/teamInfo");
  };

  useEffect(() => {
    const matchInfoObjString = localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));
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
          src={isAwaySub ? bellSolidIcon : bellEmptyIcon}
          alt="bellEmptyIcon.svg"
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
          />
        </div>
        <img
          className={styles.subscriptionStatus}
          src={isHomeSub ? bellSolidIcon : bellEmptyIcon}
          alt="bellEmptyIcon.svg"
        />
      </div>
    </div>
  );
}
