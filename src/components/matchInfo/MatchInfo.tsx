import MatchInfoTop from "./matchInfoComponents/MatchInfoTop";
import MatchInfoBottom from "./matchInfoComponents/matchInfoBottom/MatchInfoBottom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getMatchInfo, getMatchStats } from "api/nba";
import { MatchContext } from "context/MatchContext";
import { nbaMatchInfoType, mlbMatchInfoType } from "types/types";
import { dummyMlbGamesStats } from "./dummyMlbGamesStats";
import styles from "./MatchInfo.module.scss";

export default function MatchInfo() {
  const { id } = useParams();
  const [matchStats, setMatchStats] = useState<null | object[]>(null);
  // nbaMatchInfo contains date, id, periods, scores, teams, and status
  const [nbaMatchInfo, setNbaMatchInfo] = useState<null | nbaMatchInfoType>(
    null
  );
  // mlbMatchInfo contains Umpires, Venue, currentInning, currentOuts, gameID, gameStatus, linescore, teamStats, home, away
  const [mlbMatchInfo, setMlbMatchInfo] = useState<null | mlbMatchInfoType>(
    null
  );

  // match contains team nickname, logo, leagueType, and total score
  const { match } = useContext(MatchContext);

  // define props for either nba or mlb
  const leagueType = match.leagueType;
  let leagueCategory: string | undefined = "";
  let awayScores = null;
  let homeScores = null;
  let periods = null;
  let status = null;
  let homeStats = null;
  let awayStats = null;
  switch (leagueType) {
    case "nba": {
      leagueCategory = "National Basketball Association";
      awayScores = nbaMatchInfo?.scores?.visitors?.linescore;
      homeScores = nbaMatchInfo?.scores?.home?.linescore;
      periods = nbaMatchInfo?.periods?.current;
      status = nbaMatchInfo?.status?.long;
      homeStats = matchStats && matchStats[0];
      awayStats = matchStats && matchStats[1];
      break;
    }
    case "mlb": {
      leagueCategory = "Major League Baseball";
      console.log(mlbMatchInfo);
      const awayScoresObj = mlbMatchInfo?.lineScore?.away?.scoresByInning;
      awayScores = awayScoresObj && Object.values(awayScoresObj);
      const homeScoresObj = mlbMatchInfo?.lineScore?.home?.scoresByInning;
      homeScores = homeScoresObj && Object.values(homeScoresObj);
      periods = mlbMatchInfo?.currentInning;
      status = mlbMatchInfo?.gameStatus;
      const mlbHomeStatObj = mlbMatchInfo && mlbMatchInfo.teamStats?.home;
      const mlbAwayStatObj = mlbMatchInfo && mlbMatchInfo.teamStats?.away;
      homeStats = mlbHomeStatObj;
      awayStats = mlbAwayStatObj;
      break;
    }
  }

  const matchDate = nbaMatchInfo?.date?.start;
  const nbaDate = matchDate && matchDate.slice(0, 10);
  const mlbDate = id?.slice(0, 8);

  // get nba match info
  useEffect(() => {
    const asyncGetMatchInfo = async () => {
      const response = id && (await getMatchInfo(id));
      const data = response && response.data;
      const idObject = data && data[id.toString()].response;
      idObject && setNbaMatchInfo(idObject);
    };
    if (leagueType === "nba") asyncGetMatchInfo();
  }, [id, leagueType]);

  // get nba match stats
  useEffect(() => {
    const asyncGetMatchStats = async () => {
      const response = id && (await getMatchStats(id));
      const objData = response && response.data;
      const idObject = objData && objData[id.toString()];
      setMatchStats(idObject);
    };
    if (leagueType === "nba") asyncGetMatchStats();
  }, [id]);

  // get mlb match stats
  useEffect(() => {
    if (leagueType === "mlb") {
      setMlbMatchInfo(dummyMlbGamesStats[id as keyof object]);
    }
  }, [id, leagueType]);

  // set the match related mlb data to localStorage to prevent refersh page data disapear
  useEffect(() => {
    if (mlbMatchInfo && match && leagueType === "mlb") {
      // store the values to props
      // if the data alreadt exists in localStorage it will be overwritten
      const matchInfoObj = {
        ...mlbMatchInfo,
        id: id,
        league: leagueCategory,
        leagueType: leagueType,
        matchHour: match?.matchHour,
        awayTeam: match.awayTeam?.nickname,
        awayLogo: match.awayTeam?.logo,
        awayTotal: match.scores?.awayTotal,
        homeTeam: match.homeTeam?.nickname,
        homeLogo: match.homeTeam?.logo,
        homeTotal: match.scores?.homeTotal,
      };
      localStorage.setItem("matchInfoObj", JSON.stringify(matchInfoObj));

      const awayStats = mlbMatchInfo.teamStats?.away;
      const homeStats = mlbMatchInfo.teamStats?.home;
      localStorage.setItem("awayStats", JSON.stringify(awayStats));
      localStorage.setItem("homeStats", JSON.stringify(homeStats));
    }
  });

  // set the match related nba data to localStorage to prevent refresh page data disapears
  useEffect(() => {
    if (nbaMatchInfo && match && leagueType === "nba") {
      // store the values to props
      // if the data alreadt exists in localStorage it will be overwritten
      const matchInfoObj = {
        id: id,
        league: leagueCategory,
        leagueType: leagueType,
        date: nbaDate,
        awayTeam: match.awayTeam?.nickname,
        awayLogo: match.awayTeam?.logo,
        awayScores: nbaMatchInfo.scores?.visitors?.linescore,
        awayTotal: match.scores?.awayTotal,
        homeTeam: match.homeTeam?.nickname,
        homeLogo: match.homeTeam?.logo,
        homeScores: nbaMatchInfo.scores?.home?.linescore,
        homeTotal: match.scores?.homeTotal,
        periods: nbaMatchInfo.periods?.current,
        status: nbaMatchInfo.status?.long,
        matchHour: match?.matchHour,
      };
      localStorage.setItem("matchInfoObj", JSON.stringify(matchInfoObj));
    }

    if (matchStats) {
      const homeStats = matchStats && matchStats[0];
      const awayStats = matchStats && matchStats[1];
      localStorage.setItem("awayStats", JSON.stringify(awayStats));
      localStorage.setItem("homeStats", JSON.stringify(homeStats));
    }
  }, [id, match, leagueCategory, leagueType, nbaDate]);

  return (
    <div className={styles.matchInfo}>
      <MatchInfoTop
        leagueType={leagueType}
        league={leagueCategory}
        date={nbaDate ? nbaDate : mlbDate}
        awayTeam={match.awayTeam?.nickname}
        homeTeam={match.homeTeam?.nickname}
      />
      <MatchInfoBottom
        leagueType={leagueType}
        awayTeam={match.awayTeam?.nickname}
        awayLogo={match.awayTeam?.logo}
        awayTotal={match.scores?.awayTotal}
        homeTeam={match.homeTeam?.nickname}
        homeLogo={match.homeTeam?.logo}
        homeTotal={match.scores?.homeTotal}
        matchHour={match?.matchHour}
        awayScores={awayScores}
        homeScores={homeScores}
        periods={periods}
        status={status}
        homeStats={homeStats}
        awayStats={awayStats}
      />
    </div>
  );
}
