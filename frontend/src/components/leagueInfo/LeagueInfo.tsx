import LeftSection from "./leagueInfoComponents/LeftSection";
import RightSection from "./leagueInfoComponents/RightSection";
import { leagueParamsProps } from "types/types";
import styles from "./LeagueInfo.module.scss";

export default function LeagueInfo(props: leagueParamsProps) {
  return (
    <div className={styles.leagueInfo}>
      <LeftSection league={props.league} />
      <RightSection league={props.league} />
    </div>
  );
}
