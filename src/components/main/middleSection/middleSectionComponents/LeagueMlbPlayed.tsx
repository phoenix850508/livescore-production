import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import MlbMatchItem from "./matches/MlbMatchItem";
import { allGamesProps, mlbMatchItemProps } from "types/types";
import styles from "./LeagueMlbPlayed.module.scss";

export default function LeagueMlbPlayed(mlbGames: allGamesProps) {
  const objectData = mlbGames && mlbGames.mlbGames;
  const allGames: object[] | undefined =
    objectData && Object.values(objectData);
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop />
      {allGames &&
        allGames.map((match: mlbMatchItemProps, index: number) => {
          return (
            <MlbMatchItem
              key={index}
              away={match.away}
              home={match.home}
              gameID={match.gameID}
              gameTime={match.gameTime}
              teamIDAway={match.teamIDAway}
              teamIDHome={match.teamIDHome}
            />
          );
        })}
    </div>
  );
}
