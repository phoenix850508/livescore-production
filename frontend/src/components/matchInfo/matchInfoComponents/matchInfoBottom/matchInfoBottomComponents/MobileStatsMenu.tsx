import { mobileStatsProps } from "types/types";
import clsx from "clsx";
import styles from "./MobileStatsMenu.module.scss";

export default function MobileStatsMenu(props: mobileStatsProps) {
  return (
    <div className={styles.mobileStatsMenu}>
      <div
        className={clsx(
          { [styles.active]: props.activeMenu === "details" },
          styles.details
        )}
        onClick={props.onDetailsClick}
      >
        <span className={styles.menuTitle}>DETAILS</span>
        <div
          className={clsx({
            [styles.underline]: props.activeMenu === "details",
          })}
        ></div>
      </div>
      <div
        className={clsx(
          { [styles.active]: props.activeMenu === "statistics" },
          styles.statistics
        )}
        onClick={props.onStatisticsClick}
      >
        <span className={styles.menuTitle}>STATISTICS</span>
        <div
          className={clsx({
            [styles.underline]: props.activeMenu === "statistics",
          })}
        ></div>
      </div>
    </div>
  );
}
