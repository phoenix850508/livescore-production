import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import { useState, useEffect, useRef, useContext } from "react";
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
import { SeasonContext } from "context/SeasonContext";

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
  const [arenaInfo, setArenaInfo] = useState<arena | undefined | null>(null);
  const defaultLogo = "https://www.svgrepo.com/show/133513/shield.svg";
  const teamNicknameRef = useRef<null | string | undefined>(null);

  // get current year
  const { season } = useContext(SeasonContext);
  const seasonStr = season.season;

  // declare id and arena info, needs to find the matching home id from nbaAllSeasonGames/mlbAllSeasonGames in order to find team information
  let index = 0;
  const homeIdRef = useRef<number | string | undefined | null>(0);

  // get nab all games per season per team
  useEffect(() => {
    const asyncGetgamePerSeasonPerTeam = async () => {
      const response = id && (await getgamePerSeasonPerTeam(seasonStr, id));
      setNbaAllSeasonGames(response && response.data.response);
    };
    if (league === "nba") asyncGetgamePerSeasonPerTeam();
  }, [id, league, season, seasonStr]);

  // find nba matching home id for team info
  useEffect(() => {
    if (league === "nba" && nbaAllSeasonGames) {
      homeIdRef.current =
        nbaAllSeasonGames && nbaAllSeasonGames[index]?.teams?.home?.id;
      while (
        homeIdRef.current !== Number(id) ||
        nbaAllSeasonGames[index].arena?.country
      ) {
        index++;
        homeIdRef.current = nbaAllSeasonGames[index]?.teams?.home?.id;
        if (index > 87) {
          break;
        }
      }
      // if find the matched id, set arena info
      if (homeIdRef.current === Number(id)) {
        setArenaInfo(nbaAllSeasonGames[index]?.arena);
      } else {
        setArenaInfo(null);
      }
    }
  }, [id, index, league, nbaAllSeasonGames]);

  // get nba team
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && setTeamFullName(response.data.response[0].name);
      response &&
        localStorage.setItem("teamFullName", response.data.response[0].name);
      if (response && response.data.response[0].logo) {
        setTeamLogo(
          response.data.response[0].logo
            ? response.data.response[0].logo
            : defaultLogo
        );
        teamNicknameRef.current =
          response && response.data.response[0].nickname;
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

  // get mlb team info: fullname/logo
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
      teamNicknameRef.current = dummyMlbTeams[index].teamAbv;
    }
  }, [league, id, index]);

  return (
    <div className={styles.teamInfo}>
      <LeftSection
        teamFullName={teamFullName}
        teamNickname={teamNicknameRef.current}
        arena={arenaInfo?.name}
        city={league === "nba" ? arenaInfo?.city : mlbTeamInfo?.teamCity}
        state={arenaInfo?.state}
        matches={
          league === "nba" ? nbaAllSeasonGames : mlbAllSeasonGames?.schedule
        }
        season={seasonStr}
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
