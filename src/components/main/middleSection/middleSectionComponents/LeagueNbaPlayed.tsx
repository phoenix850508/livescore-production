import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import MatchItem from "./matches/NbaMatchItem";
import { allGamesProps, nbaMatchItemProps, showSportType } from "types/types";
import styles from "./LeaguePlayed.module.scss";

export default function LeaguePlayed(props: allGamesProps) {
  const dateObject = props.nbaGames && Object.values(props.nbaGames);
  const allGames = dateObject && Object.values(dateObject)[0];
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} nbaGames={props.nbaGames} />
      {allGames.map((match: nbaMatchItemProps, index: number) => {
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
