import TeamInfoTop from "./leftSectionComponents/TeamInfoTop";
import TeamInfoMiddle from "./leftSectionComponents/TeamInfoMiddle";
import TeamInfoBottom from "./leftSectionComponents/TeamInfoBottom";
import { teamInfoType, nbaMatchItemArray } from "types/types";
import styles from "./LeftSection.module.scss";

interface combinedTypes extends nbaMatchItemArray, teamInfoType {}
export default function LeftSection(props: combinedTypes) {
  return (
    <div className={styles.leftSecttion}>
      <TeamInfoTop teamFullName={props.teamFullName} />
      <TeamInfoMiddle
        arena={props.arena}
        city={props.city}
        state={props.state}
      />
      <TeamInfoBottom matches={props.matches} season={props.season} />
    </div>
  );
}
