import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import {
  mlbMatchItemProps,
  matchDataObjType,
  showFavorites,
  showSportType,
} from "types/types";
import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import { getMlbMatchScore } from "api/mlb";
import { dummyMlbMatch } from "./dummyMlbMatch";
import clsx from "clsx";
import styles from "./MlbMatchItem.module.scss";

interface combinedTypes
  extends mlbMatchItemProps,
    showFavorites,
    showSportType {}

export default function MlbMatchItem(props: combinedTypes) {
  // use useState to decide whether the team is subscribed
  const [awaySubs, setAwaySubs] = useState(false);
  const [homeSubs, setHomeSubs] = useState(false);

  // extract props teams
  const away = props.away;
  const home = props.home;
  // extract props id
  const awayId = Number(props?.teamIDAway);
  const homeId = Number(props?.teamIDHome);
  // extract props time
  const colonIndex = props?.gameTime?.indexOf(":");
  const timeLength = props?.gameTime?.length;
  let matchHour: string | undefined = "0";
  if (timeLength === 5) {
    matchHour = props?.gameTime?.slice(
      colonIndex && colonIndex - 1,
      colonIndex && colonIndex + 4
    );
    matchHour += "m";
  } else {
    matchHour = props.gameTime?.slice(
      colonIndex && colonIndex - 2,
      colonIndex && colonIndex + 4
    );
    matchHour += "m";
  }
  // set useState matchInforation
  const [matchDataObj, setMatchDataObj] = useState<matchDataObjType | null>(
    null
  );

  const matchAwayScore = matchDataObj && matchDataObj?.lineScore?.away?.R;
  const matchHomeScore = matchDataObj?.lineScore?.home?.R;

  // identify MLB sport type to dispatch to Feature Match
  const leagueType =
    away && home && (away.length < 4 || home.length < 4) ? "mlb" : "";

  // dispatch match
  const { dispatch } = useContext(MatchContext);
  const handleMatchClick = () => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: awayId,
        nickname: away,
      },
      homeTeam: {
        id: homeId,
        nickname: home,
      },
      scores: {
        awayTotal: matchAwayScore,
        homeTotal: matchHomeScore,
      },
      leagueType: leagueType,
      id: props.gameID,
    });
  };

  // toggle subscribe away team
  const handleAwayBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.target);
    // if localStorage has data
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === away)) {
        // remove the name from array
        setAwaySubs(false);
        const arr = teamsParsed.filter((teamName: string) => teamName !== away);
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setAwaySubs(true);
        teamsParsed.push(away);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setAwaySubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([away]));
    }
  };

  // toggle subscribe home team
  const handleHomeBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.target);
    // if localStorage has data
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === home)) {
        // remove the name from array
        setHomeSubs(false);
        const arr = teamsParsed.filter((teamName: string) => teamName !== home);
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setHomeSubs(true);
        teamsParsed.push(home);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setHomeSubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([home]));
    }
  };

  useEffect(() => {
    setMatchDataObj(Object.values(dummyMlbMatch)[0]);
  }, []);

  // // get per match information
  // useEffect(() => {
  //   console.log("re-render useEffect");
  //   const asynGetMlbMatchScore = async () => {
  //     const response = props?.gameID && (await getMlbMatchScore(props.gameID));
  //     response && console.log(response.data);
  //     // const response = props?.gameID && (await getMlbMatchScore(props.gameID));
  //     // response && setMatchDataObj(response.data.body);
  //   };
  //   asynGetMlbMatchScore();
  // }, [props?.gameID]);

  // dispath the latest match
  useEffect(() => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: awayId,
        nickname: away,
      },
      homeTeam: {
        id: homeId,
        nickname: home,
      },
      scores: {
        awayTotal: matchAwayScore,
        homeTotal: matchHomeScore,
      },
      leagueType: leagueType,
      id: props.gameID,
    });
  }, [matchAwayScore, matchHomeScore]);

  // decide whether the subscription bell should be solid
  useEffect(() => {
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if away teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === away)) {
        setAwaySubs(true);
      }
      // if home teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === home)) {
        setHomeSubs(true);
      }
    }
  }, []);

  return (
    <div
      className={clsx(styles.matchItem, {
        [styles.notInFavorite]: props.showFavorites && !awaySubs && !homeSubs,
      })}
      onClick={handleMatchClick}
    >
      <div className={styles.matchSchedule}>
        <div className={styles.matchTime}>{matchHour}</div>
        <div className={styles.matchProgress}>
          {matchDataObj?.currentInning === "Final"
            ? "FT"
            : matchDataObj?.currentInning}
        </div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>{away}</div>
          <div className={styles.home}>{home}</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>{matchAwayScore}</div>
          <div className={styles.homeScore}>{matchHomeScore}</div>
        </div>
      </div>
      <div className={styles.subscriptions}>
        <div className={styles.awayBell} onClick={handleAwayBellClicked}>
          <img
            src={awaySubs ? bellSolidIcon : bellEmptyIcon}
            alt="subscribeBell.svg"
          />
        </div>
        <div className={styles.homeBell} onClick={handleHomeBellClicked}>
          <img
            src={homeSubs ? bellSolidIcon : bellEmptyIcon}
            alt="subscribeBell.svg"
          />
        </div>
      </div>
    </div>
  );
}
