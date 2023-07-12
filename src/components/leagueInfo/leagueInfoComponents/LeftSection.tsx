import LeagueTitle from "./leftSectionComponents/LeagueTitle";
import Standings from "./leftSectionComponents/Standings";
import styles from "./LeftSection.module.scss";

export default function LeftSection() {
  return (
    <div className={styles.leftSection}>
      <LeagueTitle />
      <Standings />
    </div>
  );
}
