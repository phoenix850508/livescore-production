import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchInfoBottomRight from "./matchInfoBottomComponents/MatchInfoBottomRight";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import { matchInfoObj, matchStatsObjectType } from "types/types";
import styles from "./MatchInfoBottom.module.scss";

interface combinedType extends matchInfoObj, matchStatsObjectType {}

export default function MatchInfoBottom(props: combinedType) {
  return (
    <div className={styles.matchInfoBottom}>
      <div className={styles.matchInfoLeft}>
        <MatchTeams
          status={props.status}
          periods={props.periods}
          awayTeam={props.awayTeam}
          awayLogo={props.awayLogo}
          awayTotal={props.awayTotal}
          homeTeam={props.homeTeam}
          homeLogo={props.homeLogo}
          homeTotal={props.homeTotal}
        />
        <MatchStats awayStats={props.awayStats} homeStats={props.homeStats} />
      </div>
      <MatchInfoBottomRight
        awayScores={props.awayScores}
        homeScores={props.homeScores}
        periods={props.periods}
        matchHour={props.matchHour}
      />
    </div>
  );
}
