import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchInfoBottomRight from "./matchInfoBottomComponents/MatchInfoBottomRight";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import { matchInfoObj, nbaMatchStatsObjectType } from "types/types";
import styles from "./MatchInfoBottom.module.scss";

interface combinedType extends matchInfoObj, nbaMatchStatsObjectType {}

export default function MatchInfoBottom(props: combinedType) {
  console.log("homeStats", props.homeStats);
  return (
    <div className={styles.matchInfoBottom}>
      <div className={styles.matchInfoLeft}>
        <MatchTeams
          awayTeam={props.awayTeam}
          awayLogo={props.awayLogo}
          awayTotal={props.awayTotal}
          homeTeam={props.homeTeam}
          homeLogo={props.homeLogo}
          homeTotal={props.homeTotal}
        />
        <MatchStats
          awayStats={props.awayStats}
          homeStats={props.homeStats}
          leagueType={props.leagueType}
        />
      </div>
      <MatchInfoBottomRight
        awayScores={props.awayScores}
        homeScores={props.homeScores}
        periods={props.periods}
        matchHour={props.matchHour}
        leagueType={props.leagueType}
      />
    </div>
  );
}
