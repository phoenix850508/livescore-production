import usaIcon from "icons/usaIcon.svg";
import spainIcon from "icons/spainIcon.svg";
import englandIcon from "icons/englandIcon.svg";
import germanyIcon from "icons/germanyIcon.svg";
import italyIcon from "icons/italyIcon.svg";
import africaIcon from "icons/africaIcon.svg";
import europeIcon from "icons/europeIcon.svg";
import worldIcon from "icons/worldIcon.svg";
import LeagueItem from "./leaguesComponents/LeagueItem";
import { onCalendarClick, onLeagueCupClick } from "types/types";
import clsx from "clsx";
import styles from "./LeaguesAll.module.scss";

interface combinedTypes extends onCalendarClick, onLeagueCupClick {}
export default function LeaguesAll(props: combinedTypes) {
  const locations: object[] = [
    { Africa: africaIcon },
    { England: englandIcon },
    { Europe: europeIcon },
    { Germany: germanyIcon },
    { Italy: italyIcon },
    { Spain: spainIcon },
    { USA: usaIcon },
    { World: worldIcon },
  ];
  const leagues = new Map();
  leagues.set("USA", ["MLB", "NBA"]);
  return (
    <div
      className={clsx(
        { [styles.noShow]: props.showMobileIcon !== "leagues" },
        styles.leaguesAll
      )}
    >
      <h3 className={styles.leagueTitle}>All Leagues</h3>
      {locations.map((location: object, index: number) => {
        let indexBottom = false;
        if (index === 7) indexBottom = true;
        let leagueArr: string[] | null = null;
        if (leagues.has(Object.keys(location)[0])) {
          leagueArr = leagues.get(Object.keys(location)[0]);
        }
        return (
          <LeagueItem
            key={index}
            locationIcon={Object.values(location)}
            locationTitle={Object.keys(location)}
            leagueArr={leagueArr}
            indexBottom={indexBottom}
          />
        );
      })}
    </div>
  );
}
