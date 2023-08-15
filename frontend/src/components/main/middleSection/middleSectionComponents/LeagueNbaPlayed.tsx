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
  const allGames = props.nbaGames && Object.values(props.nbaGames);
  let filteredGames: object[] | undefined | null = null;

  if (props.showFavorites) {
    const subsTeamsStr = localStorage.getItem("subscribedTeams");
    const subsTeams = (subsTeamsStr && JSON.parse(subsTeamsStr)) || {};
    filteredGames = allGames?.filter((match: combinedTypes) => {
      for (let i = 0; i < subsTeams?.length; i++) {
        if (subsTeams[i] === match.teams?.visitors?.nickname) return true;
        if (subsTeams[i] === match.teams?.home?.nickname) return true;
      }
      return false;
    });
  }

  return (
    <div className={styles.leaguePlayed}>
      <LeaguePlayedTop showSport={props.showSport} nbaGames={props.nbaGames} />
      {allGames &&
        !props.showFavorites &&
        allGames.map((match: combinedTypes, index: number) => {
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
      {props.showFavorites && filteredGames?.length
        ? filteredGames.map((match: combinedTypes, index: number) => {
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
          })
        : props.showFavorites && (
            <h3 className={styles.empty}>No subscribed team</h3>
          )}
    </div>
  );
}
