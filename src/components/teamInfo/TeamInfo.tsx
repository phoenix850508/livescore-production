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

  // declare id and arena into, needs to find the matching home id from nbaAllSeasonGames/mlbAllSeasonGames in order to find team information
  let index = 0;
  const homeIdRef = useRef<number | string | undefined | null>(0);
  const arenaRef = useRef<arena | undefined | null>(null);

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

  // find nba matching home id for team info
  useEffect(() => {
    if (league === "nba" && nbaAllSeasonGames) {
      homeIdRef.current =
        nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
      while (homeIdRef.current !== Number(id)) {
        index++;
        homeIdRef.current =
          nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
        if (index > 87) {
          break;
        }
      }
      // if find the matched id, set arean info
      if (homeIdRef.current === Number(id)) {
        arenaRef.current = nbaAllSeasonGames && nbaAllSeasonGames[index]?.arena;
      } else {
        arenaRef.current = null;
      }
    }
  }, [id, index, league, nbaAllSeasonGames]);

  // get nba team
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && setTeamFullName(response.data[0].response.name);
      response &&
        localStorage.setItem("teamFullName", response.data[0].response.name);
      if (response && response.data[0].response.logo) {
        setTeamLogo(
          response.data[0].response.logo
            ? response.data[0].response.logo
            : defaultLogo
        );
      } else {
        setTeamLogo(defaultLogo);
      }
    };
    if (league === "nba") {
      asyncGetTeam();
    }
  }, [league, id, index]);

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
        arena={arenaRef.current?.name}
        city={league === "nba" ? arenaRef.current?.city : mlbTeamInfo?.teamCity}
        state={arenaRef.current?.state}
        matches={
          league === "nba" ? nbaAllSeasonGames : mlbAllSeasonGames?.schedule
        }
        season={season}
        league={league}
        DIFF={mlbTeamInfo?.DIFF}
        conference={mlbTeamInfo?.conference}
        teamLogo={teamLogo}
      />
      <RightSection
        matches={
          league === "nba" ? nbaAllSeasonGames : mlbAllSeasonGames?.schedule
        }
        league={league}
      />
    </div>
  );
}
