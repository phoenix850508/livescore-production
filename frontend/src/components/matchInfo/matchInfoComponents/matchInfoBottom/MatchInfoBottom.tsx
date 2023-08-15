import MatchStats from "./matchInfoBottomComponents/MatchStats";
import MatchInfoBottomRight from "./matchInfoBottomComponents/MatchInfoBottomRight";
import MatchTeams from "./matchInfoBottomComponents/MatchTeams";
import MobileStatsMenu from "./matchInfoBottomComponents/MobileStatsMenu";
import {
  matchInfoObj,
  nbaMatchStatsObjectType,
  mobileStatsProps,
} from "types/types";
import { useState } from "react";
import styles from "./MatchInfoBottom.module.scss";

interface combinedType
  extends matchInfoObj,
    nbaMatchStatsObjectType,
    mobileStatsProps {}

export default function MatchInfoBottom(props: combinedType) {
  const [activeMenu, setActiveMenu] = useState<"details" | "statistics">(
    "details"
  );
  const handleDetailsClick = () => setActiveMenu("details");
  const handleStatisticsClick = () => setActiveMenu("statistics");
  return (
    <div className={styles.matchInfoBottom}>
      <div className={styles.matchInfoLeft}>
        <MatchTeams
          awayId={props.awayId}
          awayTeam={props.awayTeam}
          awayLogo={props.awayLogo}
          awayTotal={props.awayTotal}
          homeId={props.homeId}
          homeTeam={props.homeTeam}
          homeLogo={props.homeLogo}
          homeTotal={props.homeTotal}
          leagueType={props.leagueType}
          date={props.date}
          league={props.league}
        />
        <MobileStatsMenu
          activeMenu={activeMenu}
          onDetailsClick={handleDetailsClick}
          onStatisticsClick={handleStatisticsClick}
        />
        <MatchStats
          awayStats={props.awayStats}
          homeStats={props.homeStats}
          leagueType={props.leagueType}
          activeMenu={activeMenu}
        />
      </div>
      <MatchInfoBottomRight
        awayScores={props.awayScores}
        homeScores={props.homeScores}
        periods={props.periods}
        matchHour={props.matchHour}
        leagueType={props.leagueType}
        activeMenu={activeMenu}
        arena={props.arena}
        city={props.city}
        state={props.state}
      />
    </div>
  );
}
