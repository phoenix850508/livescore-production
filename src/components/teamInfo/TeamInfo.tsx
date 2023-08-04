import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getgamePerSeasonPerTeam, getTeam } from "api/nba";
import { nbaMatchItemProps } from "types/types";
import styles from "./TeamInfo.module.scss";

export default function TeamInfo() {
  const id = useParams().teamId;
  const league = useParams().league;
  const [allSeasonGeams, setAllSeasonGames] = useState<
    null | nbaMatchItemProps[]
  >(null);
  const [teamFullName, setTeamFullName] = useState<null | string>(null);

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

  // get nba home areana information
  let index = 0;
  let homeTeamId: number | undefined | null =
    allSeasonGeams && allSeasonGeams[index]?.teams?.home?.id;
  while (homeTeamId !== null && homeTeamId !== Number(id)) {
    index++;
    homeTeamId = allSeasonGeams && allSeasonGeams[index]?.teams?.home?.id;
    console.log("while loop in progress");
    if (index > 88) {
      break;
    }
  }
  const arena = allSeasonGeams && allSeasonGeams[index]?.arena;

  // get nab all geams per season per team
  useEffect(() => {
    const asyncGetgamePerSeasonPerTeam = async () => {
      const response = id && (await getgamePerSeasonPerTeam(season, id));
      const obj = response && response.data;
      const objArr = Object.values(obj)[0];
      objArr && setAllSeasonGames(Object.values(objArr));
    };
    asyncGetgamePerSeasonPerTeam();
  }, []);

  // get team full-name nba
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && setTeamFullName(response.data[0].response.name);
      response &&
        localStorage.setItem("teamFullName", response.data[0].response.name);
    };
    asyncGetTeam();
  }, []);
  return (
    <div className={styles.teamInfo}>
      <LeftSection
        teamFullName={teamFullName}
        arena={arena?.name}
        city={arena?.city}
        state={arena?.state}
        matches={allSeasonGeams}
        season={season}
      />
      <RightSection />
    </div>
  );
}
