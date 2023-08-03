import TeamInfoTop from "./leftSectionComponents/TeamInfoTop";
import TeamInfoMiddle from "./leftSectionComponents/TeamInfoMiddle";
import TeamInfoBottom from "./leftSectionComponents/TeamInfoBottom";
import { teamFullName } from "types/types";
import styles from "./LeftSection.module.scss";

export default function LeftSection(props: teamFullName) {
  return (
    <div className={styles.leftSecttion}>
      <TeamInfoTop teamFullName={props.teamFullName} />
      <TeamInfoMiddle />
      <TeamInfoBottom />
    </div>
  );
}
