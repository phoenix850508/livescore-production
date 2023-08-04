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
            return (
              <MatchLeftMatchItem
                key={index}
                id={id}
                date={date}
                status={status}
                teams={teams}
                scores={scores}
              />
            );
          })}
    </div>
  );
}
