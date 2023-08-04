import MatchesLeft from "./matchesComponents/MatchesLeft";
import { nbaMatchItemArray } from "types/types";
import styles from "./TeamInfoBottom.module.scss";

export default function TeamInfoBottom(props: nbaMatchItemArray) {
  return (
    <div className={styles.teamInfoBottom}>
      <div className={styles.title}>Matches</div>
      <select className={styles.seasonSelect}>
        <option value="2022">22/23</option>
      </select>
      <div className={styles.matches}>
        <MatchesLeft matches={props.matches} />
      </div>
    </div>
  );
}
