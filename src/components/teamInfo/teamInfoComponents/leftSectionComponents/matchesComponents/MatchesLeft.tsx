import MatchLeftMatchItem from "./matchesLeftComponents/MatchLeftMatchItem";
import styles from "./MatchesLeft.module.scss";

export default function MatchesLeft() {
  return (
    <div className={styles.matchesLeft}>
      <MatchLeftMatchItem />
      <MatchLeftMatchItem />
      <MatchLeftMatchItem />
      <MatchLeftMatchItem />
    </div>
  );
}
