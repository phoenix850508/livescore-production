import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchInfoBottomRight from "./matchInfoBottomComponents/MatchInfoBottomRight";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import styles from "./MatchInfoBottom.module.scss";

export default function MatchInfoBottom() {
  return (
    <div className={styles.matchInfoBottom}>
      <div className={styles.matchInfoLeft}>
        <MatchTeams />
        <MatchStats />
      </div>
      <MatchInfoBottomRight />
    </div>
  );
}
