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
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} mlbGames={props.mlbGames} />
      {allGames &&
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
            />
          );
        })}
    </div>
  );
}
