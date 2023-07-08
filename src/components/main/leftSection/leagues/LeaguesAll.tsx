import usaIcon from "icons/usaIcon.svg";
import spainIcon from "icons/spainIcon.svg";
import englandIcon from "icons/englandIcon.svg";
import germanyIcon from "icons/germanyIcon.svg";
import italyIcon from "icons/italyIcon.svg";
import africaIcon from "icons/africaIcon.svg";
import europeIcon from "icons/europeIcon.svg";
import worldIcon from "icons/worldIcon.svg";
import LeagueItem from "./leaguesComponents/LeagueItem";
import styles from "./LeaguesAll.module.scss";

export default function LeaguesAll() {
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
    <div className={styles.leaguesAll}>
      <h3 className={styles.leagueTitle}>All Leagues</h3>
      {locations.map((location: object, index: number) => {
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
          />
        );
      })}
    </div>
  );
}
