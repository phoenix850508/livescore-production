import MatchInfoTop from "./matchInfoComponents/MatchInfoTop";
import MatchInfoBottom from "./matchInfoComponents/matchInfoBottom/MatchInfoBottom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getMatchInfo, getMatchStats } from "api/nba";
import { MatchContext } from "context/MatchContext";
import { matchInfoType, matchStatsType } from "types/types";
import styles from "./MatchInfo.module.scss";

export default function MatchInfo() {
  const { id } = useParams();
  const [matchStats, setMatchStats] = useState<null | object[]>(null);
  // matchInfo contains date, id, periods, scores, teams, and status
  const [matchInfo, setMatchInfo] = useState<null | matchInfoType>(null);
  // match contains team nickname, logo, leagueType, and total score
  const { match } = useContext(MatchContext);
  const leagueType = match.leagueType;
  let leagueCategory: string | undefined = "";
  switch (leagueType) {
    case "nba": {
      leagueCategory = "National Basketball Association";
      break;
    }
    case "mlb": {
      leagueCategory = "Major League Baseball";
      break;
    }
  }

  const matchDate = matchInfo?.date?.start;
  const nbaDate = matchDate && matchDate.slice(0, 10);

  // get nba match info
  useEffect(() => {
    const asyncGetMatchInfo = async () => {
      const response = id && (await getMatchInfo(id));
      const data = response && response.data;
      const idObject = data && data[id.toString()].response;
      idObject && setMatchInfo(idObject);
    };
    asyncGetMatchInfo();
  }, [id]);

  // get nba match stats
  useEffect(() => {
    const asyncGetMatchStats = async () => {
      const response = id && (await getMatchStats(id));
      const objData = response && response.data;
      const idObject = objData && objData[id.toString()];
      setMatchStats(idObject);
    };
    asyncGetMatchStats();
  }, [id]);

  // set the nba match related data to localStorage to prevent refresh page data disapears
  useEffect(() => {
    if (matchInfo && match && leagueCategory) {
      // if the data alreadt exists in localStorage it will be overwritten
      const matchInfoObj = {
        id: id,
        league: leagueCategory,
        leagueType: leagueType,
        date: nbaDate,
        awayTeam: match.awayTeam?.nickname,
        awayLogo: match.awayTeam?.logo,
        awayScores: matchInfo.scores?.visitors?.linescore,
        awayTotal: match.scores?.awayTotal,
        homeTeam: match.homeTeam?.nickname,
        homeLogo: match.homeTeam?.logo,
        homeScores: matchInfo.scores?.home?.linescore,
        homeTotal: match.scores?.homeTotal,
        periods: matchInfo.periods?.current,
        status: matchInfo.status?.long,
        matchHour: match?.matchHour,
      };
      localStorage.setItem("matchInfoObj", JSON.stringify(matchInfoObj));
    }

    if (matchStats && match) {
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
        date={nbaDate}
        awayTeam={match.awayTeam?.nickname}
        homeTeam={match.homeTeam?.nickname}
      />
      <MatchInfoBottom
        league={leagueCategory}
        awayScores={matchInfo?.scores?.visitors?.linescore}
        homeScores={matchInfo?.scores?.home?.linescore}
        periods={matchInfo?.periods?.current}
        status={matchInfo?.status?.long}
        awayTeam={match.awayTeam?.nickname}
        awayLogo={match.awayTeam?.logo}
        awayTotal={match.scores?.awayTotal}
        homeTeam={match.homeTeam?.nickname}
        homeLogo={match.homeTeam?.logo}
        homeTotal={match.scores?.homeTotal}
        matchHour={match?.matchHour}
      />
    </div>
  );
}
