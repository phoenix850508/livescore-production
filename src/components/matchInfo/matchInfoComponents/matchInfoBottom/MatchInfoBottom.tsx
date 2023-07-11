import PlayerStats from "./matchInfoBottomComponents/PlayerStats";
import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import styles from "./MatchInfoBottom.module.scss";

export default function MatchInfoBottom() {
  return (
    <div className={styles.matchInfoBottom}>
      <div className={styles.matchInfoLeft}>
        <MatchTeams />
        <PlayerStats />
      </div>
      <MatchStats />
    </div>
  );
}
