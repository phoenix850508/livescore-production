import MatchInfoTop from "./matchInfoComponents/MatchInfoTop";
import MatchInfoBottom from "./matchInfoComponents/matchInfoBottom/MatchInfoBottom";
import styles from "./MatchInfo.module.scss";

export default function MatchInfo() {
  return (
    <div className={styles.matchInfo}>
      <MatchInfoTop />
      <MatchInfoBottom />
    </div>
  );
}
