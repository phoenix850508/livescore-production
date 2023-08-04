import { teamInfoType } from "types/types";
import styles from "./TeamInfoMiddle.module.scss";

export default function TeamInfoMiddle(props: teamInfoType) {
  return (
    <div className={styles.teamInfoMiddle}>
      <div className={styles.infoTitle}>Team Info</div>
      <div className={styles.teamDetailWrapper}>
        <div className={styles.arena}>Arena: {props.arena}</div>
        <div className={styles.city}>City: {props.city}</div>
        <div className={styles.state}>State: {props.state}</div>
        <div className={styles.country}>
          Country: {props.city}, {props.city !== "Toronto" ? "USA" : "Canada"}
        </div>
      </div>
    </div>
  );
}
