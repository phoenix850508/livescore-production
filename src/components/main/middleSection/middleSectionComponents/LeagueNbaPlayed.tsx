import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import NbaMatchItem from "./matches/NbaMatchItem";
import { allGamesProps, nbaMatchItemProps } from "types/types";
import styles from "./LeaguePlayed.module.scss";

export default function LeaguePlayed(props: allGamesProps) {
  const allGames = props.nbaGames && Object.values(props.nbaGames)[0];
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} nbaGames={props.nbaGames} />
      {allGames.map(
        (match: nbaMatchItemProps, index: number, showFavorites: boolean) => {
          return (
            <NbaMatchItem
              key={index}
              id={match.id}
              scores={match.scores}
              teams={match.teams}
              date={match.date}
              periods={match.periods}
              status={match.status}
              showFavorites={props.showFavorites}
            />
          );
        }
      )}
    </div>
  );
}
