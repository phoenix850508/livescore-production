import dropdownIcon from "icons/dropdownIcon.svg";
import { leagueProps } from "types/types";
import styles from "./LeagueItem.module.scss";

export default function LeagueItem(props: leagueProps) {
  return (
    <div className={styles.leagueItem}>
      <div className={styles.leagueInfoWrapper}>
        <img
          className={styles.flags}
          src={props.locationIcon[0]}
          alt="usaIcon.svg"
        />
        <span>{props.locationTitle[0]}</span>
      </div>
      <img src={dropdownIcon} alt="dropdownIcon.svg" />
    </div>
  );
}
