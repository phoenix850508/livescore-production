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
  const leagues = [
    { Africa: africaIcon },
    { England: englandIcon },
    { Europe: europeIcon },
    { Germany: germanyIcon },
    { Italy: italyIcon },
    { Spain: spainIcon },
    { "United States": usaIcon },
    { World: worldIcon },
  ];
  return (
    <div className={styles.leaguesAll}>
      <h3 className={styles.leagueTitle}>All Leagues</h3>
      {leagues.map((league: object) => {
        return (
          <LeagueItem
            locationIcon={Object.values(league)}
            locationTitle={Object.keys(league)}
          />
        );
      })}
    </div>
  );
}
