import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import MatchItem from "./matches/MatchItem";
import { allGamesProps, matchItemProps } from "types/types";
import styles from "./LeaguePlayed.module.scss";

export default function LeaguePlayed(nbaGames: allGamesProps) {
  const dateObject: object = Object.values(nbaGames)[0];
  const allGames: object[] = Object.values(dateObject)[0];
  console.log(allGames);
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop />
      {allGames.map((match: matchItemProps, index: number) => {
        return (
          <MatchItem
            key={index}
            id={match.id}
            scores={match.scores}
            teams={match.teams}
            date={match.date}
            periods={match.periods}
            status={match.status}
          />
        );
      })}
    </div>
  );
}
