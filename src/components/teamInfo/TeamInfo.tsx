import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getgamePerSeasonPerTeam, getTeam } from "api/nba";
import { nbaMatchItemProps } from "types/types";
import styles from "./TeamInfo.module.scss";

export default function TeamInfo() {
  const id = useParams().teamId;
  const [allSeasonGeams, setAllSeasonGames] = useState<
    null | nbaMatchItemProps[]
  >(null);
  const [teamFullName, setTeamFullName] = useState<null | string>(null);
  useEffect(() => {
    const asyncGetgamePerSeasonPerTeam = async () => {
      const response = id && (await getgamePerSeasonPerTeam("2022", id));
      response && setAllSeasonGames(response.data);
    };
    asyncGetgamePerSeasonPerTeam();
  }, []);

  // get team full-name nba
  useEffect(() => {
    const asyncGetTeam = async () => {
      const response = id && (await getTeam(Number(id)));
      response && console.log(response.data[0].response.name);
      response && setTeamFullName(response.data[0].response.name);
      response &&
        localStorage.setItem("teamFullName", response.data[0].response.name);
    };
    asyncGetTeam();
  }, []);
  return (
    <div className={styles.teamInfo}>
      <LeftSection teamFullName={teamFullName} />
      <RightSection />
    </div>
  );
}
