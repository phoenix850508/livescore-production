import RightSection from "components/leagueInfo/leagueInfoComponents/RightSection";
import LeftSection from "./teamInfoComponents/LeftSection";
import styles from "./TeamInfo.module.scss";

export default function TeamInfo() {
  return (
    <div className={styles.teamInfo}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
