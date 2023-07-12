import LeftSection from "./leagueInfoComponents/LeftSection";
import RightSection from "./leagueInfoComponents/RightSection";
import styles from "./LeagueInfo.module.scss";

export default function LeagueInfo() {
  return (
    <div className={styles.leagueInfo}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
