import usa from "icons/usaIcon.svg";
import bellEmpty from "icons/bellEmptyIcon.svg";
import bellSolid from "icons/bellSolidIcon.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { matchInfoObj, teamInfoType } from "types/types";
import clsx from "clsx";
import styles from "./TeamInfoTop.module.scss";

export default function TeamInfoTop(props: teamInfoType) {
  const id = useParams().teamId;
  const [matchInfoObj, setMatchInfoObj] = useState<matchInfoObj | null>(null);
  // use useState to decide whether the team is subscribed
  const [teamSubs, setTeamSubs] = useState(false);

  // if localStorage does exists
  // determine whether user clicked via matchInfo awayLogo or homeLogo
  const awayId = matchInfoObj && matchInfoObj.awayId;
  const teamName =
    matchInfoObj && Number(id) === awayId
      ? matchInfoObj?.awayTeam
      : matchInfoObj?.homeTeam;
  console.log(teamName);
  const teamFullName = props.teamFullName
    ? props.teamFullName
    : matchInfoObj && matchInfoObj.teamFullName;

  // toggle subscribe team
  const handleBellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // if localStorage has data
    if (localStorage.getItem("subscribedTeams") !== null) {
      const teams = localStorage.getItem("subscribedTeams");
      let teamsParsed = teams && JSON.parse(teams);
      // if teamName existed in localStorage
      if (teamsParsed.some((team: string) => team === teamName)) {
        // remove the name from array
        setTeamSubs(false);
        const arr = teamsParsed.filter((team: string) => team !== teamName);
        teamsParsed = arr;
      }
      // if teamName does not exists
      else {
        setTeamSubs(true);
        teamsParsed.push(teamName);
      }
      localStorage.setItem("subscribedTeams", JSON.stringify(teamsParsed));
    }
    // if localStorage has no data
    else {
      setTeamSubs(true);
      localStorage.setItem("subscribedTeams", JSON.stringify([teamName]));
    }
  };

  useEffect(() => {
    const matchInfoObjString = null || localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));
    if (!matchInfoObjString) {
      // if localStorage does not exists matchInfoObj
      console.log("matchInfoObj does not exist");
    }
  }, []);

  useEffect(() => {
    // check whethther the team is subscribed
    const subscribedTeamsString = localStorage.getItem("subscribedTeams");
    const subscribedTeams: string[] =
      subscribedTeamsString && JSON.parse(subscribedTeamsString);
    const isTeamSub =
      matchInfoObj && subscribedTeams?.some((team) => team === teamName);
    if (isTeamSub) {
      setTeamSubs(true);
    }
  }, [teamName]);

  return (
    <div className={styles.teamInfoTop}>
      <div className={styles.logoTitleWrapper}>
        {/* for nba id */}
        <img
          className={styles.teamLogo}
          src={props?.teamLogo}
          alt="teamLogo.svg"
        />
        <div className={styles.teamNameWrapper}>
          <div className={styles.teamTitle}>{teamFullName}</div>
          <div className={styles.teamLocation}>
            <img className={styles.locationLogo} src={usa} alt="usaIcon.svg" />
            <div className={styles.locationName}>United States</div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          { [styles.solid]: teamSubs },
          styles.subscriptionWrapper
        )}
        onClick={handleBellClicked}
      >
        <div className={styles.follow}>{teamSubs ? "FOLLOWED" : "FOLLOW"}</div>
        <img
          className={styles.subscriptionBell}
          src={teamSubs ? bellSolid : bellEmpty}
          alt="bellEmptyIcon.svg"
        />
      </div>
    </div>
  );
}
