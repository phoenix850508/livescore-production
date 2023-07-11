import LeaguePlayed from "./middleSectionComponents/LeaguePlayed";
import styles from "./MiddleSection.module.scss";

export default function MiddleSection() {
  return (
    <div className={styles.middleSection}>
      <h3 className={styles.middleTitle}>Pinned Games</h3>
      <LeaguePlayed />
      <LeaguePlayed />
    </div>
  );
}
