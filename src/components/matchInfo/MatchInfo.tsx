import MathInfoTop from "./matchInfoComponents/MathInfoTop";
import MathInfoBottom from "./matchInfoComponents/matchInfoBottom/MatchInfoBottom";
import styles from "./MatchInfo.module.scss";

export default function MatchInfo() {
  return (
    <div className={styles.matchInfo}>
      <MathInfoTop />
      <MathInfoBottom />
    </div>
  );
}
