import clsx from "clsx";
import { mobileTeamProps } from "types/types";
import styles from "./MobileTeamMenu.module.scss";

export default function MobileTeamMenu(props: mobileTeamProps) {
  return (
    <div className={styles.mobileTeamMenu}>
      <div className={styles.detailsWrapper} onClick={props.onDetailsClick}>
        <div
          className={clsx(
            { [styles.active]: props.activeMenu === "details" },
            styles.details
          )}
        >
          DETAILS
        </div>
        <div
          className={clsx({
            [styles.underline]: props.activeMenu === "details",
          })}
        ></div>
      </div>
      <div className={styles.matchesWrapper} onClick={props.onMatchesClick}>
        <div
          className={clsx(
            { [styles.active]: props.activeMenu === "matches" },
            styles.matches
          )}
        >
          MATCHES
        </div>
        <div
          className={clsx({
            [styles.underline]: props.activeMenu === "matches",
          })}
        ></div>
      </div>
    </div>
  );
}
