import { nbaMatchItemProps } from "types/types";
import styles from "./MatchLeftMatchItem.module.scss";

export default function MatchLeftMatchItem(props: nbaMatchItemProps) {
  let date = props.date?.start;
  date = date && date?.toString().slice(0, 10);
  const status = props.status?.long;
  const awayTeam = props.teams?.visitors?.nickname;
  const homeTeam = props.teams?.home?.nickname;
  let awayLinescore = props.scores?.visitors?.linescore;
  awayLinescore = awayLinescore?.map((score) => {
    return Number(score);
  });
  const awayTotal = awayLinescore?.reduce((accum, curr) => accum + curr, 0);
  let homeLinescore = props.scores?.home?.linescore;
  homeLinescore =
    homeLinescore &&
    homeLinescore.map((score) => {
      return Number(score);
    });
  const homeTotal = homeLinescore?.reduce((accum, curr) => accum + curr, 0);
  return (
    <div className={styles.matchLeftMatchItem}>
      <div className={styles.matchSchedule}>
        <div className={styles.matchDate}>{date}</div>
        <div className={styles.matchProgress}>
          {status === "Finished" ? "FT" : "status"}
        </div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>{awayTeam}</div>
          <div className={styles.home}>{homeTeam}</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>
            <div>{awayTotal}</div>
          </div>
          <div className={styles.homeScore}>
            <div>{homeTotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
