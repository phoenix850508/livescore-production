import triangleRight from "icons/triangle-right.svg";
import { useEffect, useState } from "react";
import { matchInfoObj } from "types/types";
import { useNavigate } from "react-router-dom";
import styles from "./MatchInfoTop.module.scss";

export default function MathInfoTop(props: matchInfoObj) {
  const [matchInfoObj, setMatchInfoObj] = useState<null | matchInfoObj>(null);
  const navigate = useNavigate();

  // get obj from localStorage
  useEffect(() => {
    const matchInfoObjString = localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));
  }, []);
  return (
    <div className={styles.matchInfoTop}>
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
        </div>
        <span className={styles.matchDate}>
          {props.date ? props.date : matchInfoObj?.date}
        </span>
      </div>
      <div className={styles.matchTitle}>
        <div className={styles.away}>
          {props.awayTeam ? props.awayTeam : matchInfoObj?.awayTeam}
        </div>
        <div>-</div>
        <div className={styles.home}>
          {props.homeTeam ? props.homeTeam : matchInfoObj?.homeTeam}
        </div>
      </div>
    </div>
  );
}
