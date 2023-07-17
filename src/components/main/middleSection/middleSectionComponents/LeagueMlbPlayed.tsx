import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import MlbMatchItem from "./matches/MlbMatchItem";
import { allGamesProps, nbaMatchItemProps } from "types/types";
import styles from "./LeagueMlbPlayed.module.scss";

export default function LeagueMlbPlayed(mlbGames: allGamesProps) {
  const allGames: object[] = Object.values(mlbGames);
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop />
      {allGames.map((match: nbaMatchItemProps, index: number) => {
        return <MlbMatchItem />;
      })}
    </div>
  );
}
