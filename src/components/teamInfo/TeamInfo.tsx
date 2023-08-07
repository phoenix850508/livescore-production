import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getgamePerSeasonPerTeam, getTeam } from "api/nba";
import {
  nbaMatchItemProps,
  mlbMatchItem,
  arena,
  teamInfoType,
} from "types/types";
import { dummyMlbTeamMatches } from "./dummyMlbTeamMatches";
import { dummyMlbTeams } from "./dummyMlbTeams";
import styles from "./TeamInfo.module.scss";

export default function TeamInfo() {
  const id = useParams().teamId;
  const league = useParams().league;
  const [nbaAllSeasonGames, setNbaAllSeasonGames] = useState<
    null | nbaMatchItemProps[]
  >(null);
  const [mlbAllSeasonGames, setMlbAllSeasonGames] =
    useState<null | mlbMatchItem>(null);
  const [teamFullName, setTeamFullName] = useState<null | string>(null);
  const [mlbTeamInfo, setMlbTeamInfo] = useState<teamInfoType | null>(null);
  const [teamLogo, setTeamLogo] = useState<string | undefined>("");

  // get current year
  const date = new Date();
  const currYear = date.getFullYear();
  let season = "";
  switch (league) {
    case "nba": {
      season = `${currYear - 1}`;
      break;
    }
    case "mlb": {
      season = `${currYear}`;
      break;
    }
  }

  // get nba home arena information
  let index = 0;
  let homeTeamId: number | string | undefined | null = 0;
  let arena: arena | undefined | null;
  if (league === "nba") {
    homeTeamId = nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
    while (homeTeamId !== Number(id)) {
      index++;
      homeTeamId =
        nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
      if (index > 88) {
        break;
      }
    }
    arena = nbaAllSeasonGames && nbaAllSeasonGames[index]?.arena;
  }

  // get nab all games per season per team
  useEffect(() => {
    const asyncGetgamePerSeasonPerTeam = async () => {
      const response = id && (await getgamePerSeasonPerTeam(season, id));
      const obj = response && response.data;
      const objArr = Object.values(obj)[0];
      objArr && setNbaAllSeasonGames(Object.values(objArr));
    };
    if (league === "nba") asyncGetgamePerSeasonPerTeam();
  }, []);

  // get nba team full-name
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && setTeamFullName(response.data[0].response.name);
      response &&
        localStorage.setItem("teamFullName", response.data[0].response.name);
    };
    if (league === "nba") asyncGetTeam();
  }, []);

  // get nba teamLogo
  useEffect(() => {
    if (homeTeamId === Number(id) && league === "nba") {
      nbaAllSeasonGames &&
        setTeamLogo(nbaAllSeasonGames[index]?.teams?.home?.logo);
    }
  }, [index, homeTeamId, id]);

  // get mlb all games per season per team
  useEffect(() => {
    setMlbAllSeasonGames(dummyMlbTeamMatches);
  }, []);

  // get mlb team full-name
  useEffect(() => {
    if (league === "mlb") {
      while (homeTeamId !== id) {
        index++;
        homeTeamId = dummyMlbTeams[index].teamID;
        setTeamFullName(
          `${dummyMlbTeams[index].teamCity} ${dummyMlbTeams[index].teamName}`
        );
        setMlbTeamInfo(dummyMlbTeams[index]);
        if (index > 30) {
          break;
        }
      }
      setTeamLogo(dummyMlbTeams[index].mlbLogo1);
    }
  }, []);

  return (
    <div className={styles.teamInfo}>
      <LeftSection
        teamFullName={teamFullName}
        arena={arena?.name}
        city={league === "nba" ? arena?.city : mlbTeamInfo?.teamCity}
        state={arena?.state}
        matches={
          league === "nba" ? nbaAllSeasonGames : mlbAllSeasonGames?.schedule
        }
        season={season}
        league={league}
        DIFF={mlbTeamInfo?.DIFF}
        conference={mlbTeamInfo?.conference}
        teamLogo={teamLogo}
      />
      <RightSection />
    </div>
  );
}
