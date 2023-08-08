import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import { useNavigate } from "react-router-dom";
import { showSportType, allTeams, leagueParamsProps } from "types/types";
import styles from "./FeaturedMatch.module.scss";

interface combinedType extends showSportType, leagueParamsProps {}
export default function FeaturedMatch(props: combinedType) {
  // just temporarily shows some logo for better view (will figure out other ways later)

  const { match, dispatch } = useContext(MatchContext);
  // extract the latest/selected match information
  const awayTeam = match.awayTeam;
  const homeTeam = match.homeTeam;
  const scores = match.scores;
  // use useState to memorize the teams logo
  const defaultLogo = "https://www.svgrepo.com/show/133513/shield.svg";
  const [awayTeamLogo, setAwayTeamLogo] = useState(defaultLogo);
  const [homeTeamLogo, setHomeTeamLogo] = useState(defaultLogo);

  const navigate = useNavigate();
  const handleClick = () => {
    // if Featured Match is not empty, then dispatch data to matchInfoPage
    if (
      match?.awayTeam?.nickname !== "away" ||
      match?.homeTeam?.nickname !== "home"
    ) {
      dispatch({
        type: "selectFeaturedMatch",
        ...match,
        awayTeam: {
          ...match.awayTeam,
          logo: awayTeamLogo,
        },
        homeTeam: {
          ...match.homeTeam,
          logo: homeTeamLogo,
        },
      });
      return navigate(`/match/${match.leagueType}/${match.id}`);
    }
    alert("no teams selcted");
  };

  // get teams
  const allNbaTeamsStr = localStorage.getItem("allNbaTeams");
  const allNbaTeams = allNbaTeamsStr && JSON.parse(allNbaTeamsStr);

  const allMlbTeamsStr = localStorage.getItem("allMlbTeams");
  const allMlbTeams = allMlbTeamsStr && JSON.parse(allMlbTeamsStr);

  useEffect(() => {
    // if match.homeTeam data exists, and the data is from nba
    if (homeTeam?.id && homeTeam?.nickname && homeTeam?.nickname?.length > 3) {
      // find nba team form localStorage
      const filteredHomeTeam =
        allNbaTeams &&
        allNbaTeams.filter(
          (team: allTeams) => team.id === match?.homeTeam?.id
        )[0]?.response.logo;
      const filteredAwayTeam =
        allNbaTeams &&
        allNbaTeams.filter(
          (team: allTeams) => team.id === match?.awayTeam?.id
        )[0]?.response.logo;
      setHomeTeamLogo(filteredHomeTeam ? filteredHomeTeam : defaultLogo);
      setAwayTeamLogo(filteredAwayTeam ? filteredAwayTeam : defaultLogo);
    } else {
      // find mlb team from localStorage
      const filteredHomeTeam =
        allMlbTeams &&
        allMlbTeams.filter(
          (team: any) => Number(team.teamID) === match?.homeTeam?.id
        )[0]?.mlbLogo1;
      const filteredAwayTeam =
        allMlbTeams &&
        allMlbTeams.filter(
          (team: any) => Number(team.teamID) === match?.awayTeam?.id
        )[0]?.mlbLogo1;
      setHomeTeamLogo(filteredHomeTeam ? filteredHomeTeam : defaultLogo);
      setAwayTeamLogo(filteredAwayTeam ? filteredAwayTeam : defaultLogo);
    }
  }, [homeTeam, props?.showSport, allNbaTeams, allMlbTeams]);
  return (
    <div className={styles.featuredMatch} onClick={handleClick}>
      <div className={styles.matchInfo}>
        <div className={styles.away}>
          <h3 className={styles.awayName}>{awayTeam?.nickname}</h3>
          <img className={styles.logo} src={awayTeamLogo} alt="awayTeam.svg" />
        </div>
        <div className={styles.scores}>
          <span className={styles.awayScore}>{scores?.awayTotal}</span>
          <span>-</span>
          <span className={styles.homeScore}>{scores?.homeTotal}</span>
        </div>
        <div className={styles.home}>
          <h3 className={styles.homeName}>{homeTeam?.nickname}</h3>
          <img className={styles.logo} src={homeTeamLogo} alt="homeTeam.svg" />
        </div>
      </div>
    </div>
  );
}
