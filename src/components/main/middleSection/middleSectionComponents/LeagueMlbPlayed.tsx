import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import MlbMatchItem from "./matches/MlbMatchItem";
import {
  allGamesProps,
  mlbMatchItemProps,
  showFavorites,
  showSportType,
} from "types/types";
import styles from "./LeagueMlbPlayed.module.scss";

interface combinedTypes
  extends allGamesProps,
    mlbMatchItemProps,
    showFavorites,
    showSportType {}

export default function LeagueMlbPlayed(props: combinedTypes) {
  const objectData = props.mlbGames && props?.mlbGames;
  const allGames: object[] | undefined =
    objectData && Object.values(objectData);
  let filteredGames: object[] | undefined | null = null;

  if (props.showFavorites) {
    const subsTeamsStr = localStorage.getItem("subscribedTeams");
    const subsTeams = subsTeamsStr && JSON.parse(subsTeamsStr);
    filteredGames = allGames?.filter((match: combinedTypes) => {
      for (let i = 0; i < subsTeams.length; i++) {
        if (subsTeams[i] === match.away) return true;
        if (subsTeams[i] === match.home) return true;
      }
    });
  }
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} mlbGames={props.mlbGames} />
      {allGames &&
        !props.showFavorites &&
        allGames.map((match: combinedTypes, index: number) => {
          return (
            <MlbMatchItem
              key={index}
              away={match.away}
              home={match.home}
              gameID={match.gameID}
              gameTime={match.gameTime}
              teamIDAway={match.teamIDAway}
              teamIDHome={match.teamIDHome}
              showFavorites={props.showFavorites}
              showSport={props.showSport}
            />
          );
        })}
      {filteredGames?.length ? (
        props.showFavorites &&
        filteredGames.map((match: combinedTypes, index: number) => {
          return (
            <MlbMatchItem
              key={index}
              away={match.away}
              home={match.home}
              gameID={match.gameID}
              gameTime={match.gameTime}
              teamIDAway={match.teamIDAway}
              teamIDHome={match.teamIDHome}
              showFavorites={props.showFavorites}
              showSport={props.showSport}
            />
          );
        })
      ) : (
        <h3 className={styles.empty}>No subscribed team</h3>
      )}
    </div>
  );
}
