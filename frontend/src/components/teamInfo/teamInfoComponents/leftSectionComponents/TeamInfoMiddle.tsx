import { teamInfoType, mobileTeamProps } from "types/types";
import clsx from "clsx";
import styles from "./TeamInfoMiddle.module.scss";

interface combinedProps extends teamInfoType, mobileTeamProps {}
export default function TeamInfoMiddle(props: combinedProps) {
  return (
    <div
      className={clsx(
        { [styles.noShow]: props.activeMenu === "matches" },
        styles.teamInfoMiddle
      )}
    >
      <div className={styles.infoTitle}>Team Info</div>
      <div className={styles.teamDetailWrapper}>
        {props.league === "nba" && (
          <div className={styles.arena}>Arena: {props.arena}</div>
        )}
        {props.league === "mlb" && <div>DIFF: {props.DIFF}</div>}
        <div className={styles.city}>City: {props.city}</div>
        {props.league === "nba" && (
          <div className={styles.state}>State: {props.state}</div>
        )}
        {props.league === "mlb" && <div>Conference: {props.conference}</div>}
        <div className={styles.country}>
          Country: {props.city}, {props.city !== "Toronto" ? "USA" : "Canada"}
        </div>
      </div>
    </div>
  );
}
