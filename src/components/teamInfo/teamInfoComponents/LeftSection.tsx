import TeamInfoTop from "./leftSectionComponents/TeamInfoTop";
import TeamInfoMiddle from "./leftSectionComponents/TeamInfoMiddle";
import TeamInfoBottom from "./leftSectionComponents/TeamInfoBottom";
import styles from "./LeftSection.module.scss";

export default function LeftSection() {
  return (
    <div className={styles.leftSecttion}>
      <TeamInfoTop />
      <TeamInfoMiddle />
      <TeamInfoBottom />
    </div>
  );
}
