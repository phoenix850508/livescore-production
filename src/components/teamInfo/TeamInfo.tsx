import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import { useState, useEffect, useRef } from "react";
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
  const defaultLogo = "https://www.svgrepo.com/show/133513/shield.svg";

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

  // get nba home information
  let index = 0;
  const homeIdRef = useRef<number | string | undefined | null>(0);
  let arena: arena | undefined | null;
  if (league === "nba") {
    homeIdRef.current =
      nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
    while (homeIdRef.current !== Number(id) && nbaAllSeasonGames) {
      index++;
      homeIdRef.current =
        nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
      if (index > 87) {
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
  }, [id, league, season]);

  // get nba team full-name
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && setTeamFullName(response.data[0].response.name);
      response &&
        localStorage.setItem("teamFullName", response.data[0].response.name);
    };
    if (league === "nba") asyncGetTeam();
  }, [league, id]);

  // get nba teamLogo
  useEffect(() => {
    if (homeIdRef.current === Number(id) && league === "nba") {
      nbaAllSeasonGames &&
        setTeamLogo(nbaAllSeasonGames[index]?.teams?.home?.logo);
    } else if (homeIdRef.current !== Number(id) && league === "nba") {
      setTeamLogo(defaultLogo);
    }
  }, [index, id, league]);

  // get mlb all games per season per team
  useEffect(() => {
    setMlbAllSeasonGames(dummyMlbTeamMatches);
  }, [league, id]);

  // get mlb team full-name
  useEffect(() => {
    if (league === "mlb") {
      homeIdRef.current = dummyMlbTeams[index].teamID;
      while (homeIdRef.current !== id) {
        index++;
        homeIdRef.current = dummyMlbTeams[index].teamID;
        if (index > 29) {
          break;
        }
      }
      setTeamLogo(dummyMlbTeams[index].mlbLogo1);
      setTeamFullName(
        `${dummyMlbTeams[index].teamCity} ${dummyMlbTeams[index].teamName}`
      );
      setMlbTeamInfo(dummyMlbTeams[index]);
    }
  }, [league, id, index]);

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
