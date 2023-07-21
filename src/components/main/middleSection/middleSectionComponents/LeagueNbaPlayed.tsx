import LeaguePlayedTop from "./leaguePlayedTop/LeaguePlayedTop";
import NbaMatchItem from "./matches/NbaMatchItem";
import {
  allGamesProps,
  nbaMatchItemProps,
  showFavorites,
  showSportType,
} from "types/types";
import styles from "./LeaguePlayed.module.scss";

interface combinedTypes
  extends allGamesProps,
    nbaMatchItemProps,
    showFavorites,
    showSportType {}

export default function LeagueNbaPlayed(props: combinedTypes) {
  const allGames = props.nbaGames && Object.values(props.nbaGames)[0];
  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} nbaGames={props.nbaGames} />
      {allGames.map((match: combinedTypes, index: number) => {
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
            showSport={props.showSport}
          />
        );
      })}
    </div>
  );
}
