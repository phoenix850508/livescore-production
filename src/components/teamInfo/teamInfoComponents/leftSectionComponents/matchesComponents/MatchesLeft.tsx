import MatchLeftMatchItem from "./matchesLeftComponents/MatchLeftMatchItem";
import { nbaMatchItemArray, nbaMatchItemProps } from "types/types";
import styles from "./MatchesLeft.module.scss";

export default function MatchesLeft(props: nbaMatchItemArray) {
  return (
    <div className={styles.matchesLeft}>
      {props.matches &&
        props.matches
          .reverse()
          .map((match: nbaMatchItemProps, index: number) => {
            const id = match.id;
            const date = match.date;
            const status = match.status;
            const teams = match.teams;
            const scores = match.scores;
            const gameID = match.gameID;
            const gameDate = match.gameDate;
            const away = match.away;
            const home = match.home;
            const teamIDAway = match.teamIDAway;
            const teamIdHome = match.teamIDHome;
            const linescore = match.lineScore;
            const gameStatus = match.gameStatus;
            const league = props.league;
            return (
              <MatchLeftMatchItem
                key={index}
                id={id}
                date={date}
                status={status}
                teams={teams}
                scores={scores}
                gameID={gameID}
                gameDate={gameDate}
                away={away}
                home={home}
                teamIDAway={teamIDAway}
                teamIDHome={teamIdHome}
                lineScore={linescore}
                gameStatus={gameStatus}
                league={league}
              />
            );
          })}
    </div>
  );
}
