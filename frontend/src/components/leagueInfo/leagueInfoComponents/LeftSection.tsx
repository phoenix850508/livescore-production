import LeagueTitle from "./leftSectionComponents/LeagueTitle";
import Standings from "./leftSectionComponents/Standings";
import { SeasonContextProvider } from "context/SeasonContext";
import { leagueParamsProps } from "types/types";
import styles from "./LeftSection.module.scss";

export default function LeftSection(props: leagueParamsProps) {
  return (
    <div className={styles.leftSection}>
      <SeasonContextProvider>
        <LeagueTitle league={props.league} />
        <Standings league={props.league} />
      </SeasonContextProvider>
    </div>
  );
}
