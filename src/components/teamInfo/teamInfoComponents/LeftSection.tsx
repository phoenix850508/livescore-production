import TeamInfoTop from "./leftSectionComponents/TeamInfoTop";
import TeamInfoMiddle from "./leftSectionComponents/TeamInfoMiddle";
import TeamInfoBottom from "./leftSectionComponents/TeamInfoBottom";
import MobileTeamMenu from "./leftSectionComponents/MobileTeamMenu";
import { teamInfoType, nbaMatchItemArray } from "types/types";
import { useState } from "react";
import styles from "./LeftSection.module.scss";

interface combinedTypes extends nbaMatchItemArray, teamInfoType {}
export default function LeftSection(props: combinedTypes) {
  const [activeMenu, setActiveMenu] = useState<"details" | "matches">(
    "details"
  );

  const handleDetailsClick = () => {
    setActiveMenu("details");
  };

  const handleMatchesClick = () => {
    setActiveMenu("matches");
  };
  return (
    <div className={styles.leftSecttion}>
      <TeamInfoTop
        teamFullName={props.teamFullName}
        teamNickname={props.teamNickname}
        league={props.league}
        teamLogo={props.teamLogo}
      />
      <MobileTeamMenu
        onDetailsClick={handleDetailsClick}
        onMatchesClick={handleMatchesClick}
        activeMenu={activeMenu}
      />
      <TeamInfoMiddle
        arena={props.arena}
        city={props.city}
        state={props.state}
        league={props.league}
        DIFF={props.DIFF}
        conference={props.conference}
        activeMenu={activeMenu}
      />
      <TeamInfoBottom
        league={props.league}
        matches={props.matches}
        season={props.season}
        activeMenu={activeMenu}
      />
    </div>
  );
}
