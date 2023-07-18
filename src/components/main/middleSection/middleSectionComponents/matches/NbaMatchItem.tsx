import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import { nbaMatchItemProps } from "types/types";
import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import clsx from "clsx";
import styles from "./NbaMatchItem.module.scss";

export default function NbaMatchItem(props: nbaMatchItemProps) {
  // use useState to decide whether the team is subscribed
  const [awaySubs, setAwaySubs] = useState(false);
  const [homeSubs, setHomeSubs] = useState(false);

  // toggle subscribe away team
  const handleAwayBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.target);
    // if localStorage has data
    const awayTeamName = teams?.visitors?.nickname;
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === awayTeamName)) {
        // remove the name from array
        setAwaySubs(false);
        const arr = teamsParsed.filter(
          (teamName: string) => teamName !== awayTeamName
        );
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setAwaySubs(true);
        teamsParsed.push(awayTeamName);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setAwaySubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([awayTeamName]));
    }
  };

  // toggle subscribe home team
  const handleHomeBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e.target);
    // if localStorage has data
    const homeTeamName = teams?.home?.nickname;
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === homeTeamName)) {
        // remove the name from array
        setHomeSubs(false);
        const arr = teamsParsed.filter(
          (teamName: string) => teamName !== homeTeamName
        );
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setHomeSubs(true);
        teamsParsed.push(homeTeamName);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setHomeSubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([homeTeamName]));
    }
  };

  // extract props teams
  const teams = props.teams;
  // extract props away scores
  const awayLinescore = props?.scores?.visitors?.linescore;
  const awayTotal = awayLinescore?.reduce(
    (accum: number, curr: number): number => accum + curr
  );
  // extract props home scores
  const homeLinescore = props?.scores?.home?.linescore;
  const homeTotal = homeLinescore?.reduce(
    (accum: number, curr: number): number => accum + curr
  );
  // extract props date, then slice the match hour from Sun, 02 Apr 2023 00:30:00 GMT
  const date = props?.date?.start;
  const utcDate = date && new Date(date);
  const colonIndex = utcDate?.toString()?.indexOf(":");
  const matchHour = utcDate
    ?.toString()
    ?.slice(colonIndex && colonIndex - 2, colonIndex && colonIndex + 3);
  //extract props match periods
  const periods = props.periods;
  // dispatch match
  const { dispatch } = useContext(MatchContext);
  const handleMatchClick = () => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: teams?.visitors?.id,
        nickname: teams?.visitors?.nickname,
      },
      homeTeam: {
        id: teams?.home?.id,
        nickname: teams?.home?.nickname,
      },
      scores: {
        awayTotal: awayTotal && awayTotal,
        homeTotal: homeTotal && homeTotal,
      },
    });
  };

  // dispatch the latest match
  useEffect(() => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: teams?.visitors?.id,
        nickname: teams?.visitors?.nickname,
      },
      homeTeam: {
        id: teams?.home?.id,
        nickname: teams?.home?.nickname,
      },
      scores: {
        awayTotal: awayTotal && awayTotal,
        homeTotal: homeTotal && homeTotal,
      },
    });
  }, [props]);

  // decide whether the subscription bell should be solid
  useEffect(() => {
    const awayTeamName = teams?.visitors?.nickname;
    const homeTeamName = teams?.home?.nickname;
    if (localStorage.getItem("subscribedTeams") !== null) {
      const team = localStorage.getItem("subscribedTeams");
      let teamsParsed = team && JSON.parse(team);
      // if away teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === awayTeamName)) {
        setAwaySubs(true);
      }
      // if home teamName existed in localStorage
      if (teamsParsed.some((teamName: string) => teamName === homeTeamName)) {
        setHomeSubs(true);
      }
    }
  }, []);

  return (
    <div
      id={styles.matchItem}
      className={clsx(styles.matchItem, {
        [styles.notInFavorite]: props.showFavorites && !awaySubs && !homeSubs,
      })}
      onClick={handleMatchClick}
    >
      <div className={styles.matchSchedule}>
        <div className={styles.matchTime}>{matchHour}</div>
        <div className={styles.matchProgress}>
          {periods?.current === 4 ? "FT" : periods?.current}
        </div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>{teams?.visitors?.nickname}</div>
          <div className={styles.home}>{teams?.home?.nickname}</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>{awayTotal}</div>
          <div className={styles.homeScore}>{homeTotal}</div>
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