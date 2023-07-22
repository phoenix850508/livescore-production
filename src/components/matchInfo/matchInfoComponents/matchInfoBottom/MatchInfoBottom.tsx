import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchInfoBottomRight from "./matchInfoBottomComponents/MatchInfoBottomRight";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import { matchInfoObj } from "types/types";
import styles from "./MatchInfoBottom.module.scss";

export default function MatchInfoBottom(props: matchInfoObj) {
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
        <MatchStats />
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
