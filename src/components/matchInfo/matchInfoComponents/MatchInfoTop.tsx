import triangleRight from "icons/triangle-right.svg";
import { useEffect, useState } from "react";
import { matchInfoObj } from "types/types";
import styles from "./MatchInfoTop.module.scss";

export default function MathInfoTop(props: matchInfoObj) {
  const [matchInfoObj, setMatchInfoObj] = useState<null | matchInfoObj>(null);
  useEffect(() => {
    const matchInfoObjString = localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));
  }, []);
  return (
    <div className={styles.matchInfoTop}>
      <div className={styles.leagueAndDate}>
        <div className={styles.categories}>
          <a href="/main" className={styles.sportCategory}>
            {(props.leagueType
              ? props.leagueType
              : matchInfoObj?.leagueType) === "nba"
              ? "Basketball"
              : "Baseball"}
          </a>
          <img
            className={styles.triangleRight}
            src={triangleRight}
            alt="triangleRight.svg"
          />
          <a href="/leagueInfo" className={styles.leagueCategory}>
            {props.league ? props.league : matchInfoObj?.league}
          </a>
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
