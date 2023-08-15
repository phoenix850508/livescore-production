import FeaturedMatch from "components/main/rightSection/rightSectionComponents/FeaturedMatch";
import nbaIcon from "icons/nbaIcon.svg";
import mlbIcon from "icons/mlbIcon.svg";
import { MatchContext } from "context/MatchContext";
import { useContext, useEffect } from "react";
import { leagueParamsProps, nbaMatchItemArray } from "types/types";
import styles from "./RightSection.module.scss";

interface combinedType extends leagueParamsProps, nbaMatchItemArray {}
export default function RightSection(props: combinedType) {
  let date: Date | 0 | string | undefined | null = "";
  const { match, dispatch } = useContext(MatchContext);
  // set up Featured match info
  // nba
  if (props.league === "nba") {
    const length = props.matches && props.matches.length;
    const latestMatch =
      (props?.matches && length && props?.matches[length - 1]) || {};
    date = latestMatch && latestMatch.date?.start;
    date = date?.toString()?.slice(0, 10);
    // mlb
  } else if (props.league === "mlb") {
    const completedMatches =
      props.matches &&
      props.matches.filter((match) => {
        return match.gameStatus !== "scheduled";
      });
    const length = completedMatches && completedMatches.length;
    date = completedMatches && length && completedMatches[length - 1].gameDate;
  }

  // get teams
  const allMlbTeamsStr = localStorage.getItem("allMlbTeams");
  const allMlbTeams = allMlbTeamsStr && JSON.parse(allMlbTeamsStr);

  // dispatch nba/mlb match to featured match
  useEffect(() => {
    if (props.league === "nba") {
      // find the latest match
      const length = props?.matches && props?.matches.length;
      const latestMatch =
        (props?.matches && length && props?.matches[length - 1]) || {};
      dispatch({
        type: "selectFeaturedMatch",
        ...match,
        awayTeam: {
          nickname: latestMatch.teams?.visitors?.nickname,
          id: latestMatch.teams?.visitors?.id,
          logo: latestMatch.teams?.visitors?.logo,
        },
        homeTeam: {
          nickname: latestMatch.teams?.home?.nickname,
          id: latestMatch.teams?.home?.id,
          logo: latestMatch.teams?.home?.logo,
        },
        scores: {
          awayTotal: latestMatch.scores?.visitors?.points,
          homeTotal: latestMatch.scores?.home?.points,
        },
        leagueType: props.league,
        id: latestMatch.id,
      });
    } else if (props.league === "mlb") {
      // filtered to the matches that is completed
      const completedMatches =
        props.matches &&
        props.matches.filter((match) => {
          return match.gameStatus !== "scheduled";
        });
      const length = completedMatches && completedMatches.length;
      // find the latest match that is completed
      const latestMatch =
        (completedMatches && length && completedMatches[length - 1]) || {};

      // get the scores from lineScore
      const awayScore = latestMatch.lineScore?.away?.R;
      const homeScore = latestMatch.lineScore?.home?.R;

      // find mlb team logo from localStorage
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

      // dispatch match to featured match
      dispatch({
        type: "selectFeaturedMatch",
        ...match,
        awayTeam: {
          nickname: latestMatch.away,
          id: Number(latestMatch.teamIDAway),
          logo: filteredAwayTeam,
        },
        homeTeam: {
          nickname: latestMatch.home,
          id: Number(latestMatch.teamIDHome),
          logo: filteredHomeTeam,
        },
        scores: {
          awayTotal: awayScore,
          homeTotal: homeScore,
        },
        leagueType: props.league,
        id: latestMatch.gameID,
      });
    }
  }, [props.league, props.matches]);
  return (
    <div className={styles.rightSection}>
      <h3 className={styles.title}>Featured Match</h3>
      <div className={styles.matchLeague}>
        <img
          className={styles.leagueIcon}
          src={props.league === "nba" ? nbaIcon : mlbIcon}
          alt="leagueIcon.svg"
        />
        <div className={styles.matchTitle}>
          <span className={styles.leagueName}>
            {props.league === "nba"
              ? "National Basketball Association"
              : "Major League Baseball"}
          </span>
          <span className={styles.matchDate}>{date}</span>
        </div>
      </div>
      <FeaturedMatch league={props.league} />
    </div>
  );
}
