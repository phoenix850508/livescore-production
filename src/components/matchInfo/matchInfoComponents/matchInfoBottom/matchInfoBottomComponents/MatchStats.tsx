import { useState, useEffect } from "react";
import { matchStatsType } from "types/types";
import styles from "./MatchStats.module.scss";

export default function MatchStats() {
  const [homeStats, setHomeStats] = useState<null | matchStatsType>(null);
  const [awayStats, setAwayStats] = useState<null | matchStatsType>(null);
  const homeStatArr = homeStats?.statistics;
  const homeStatObj = homeStatArr && homeStatArr[0];
  const homeStatKeys = homeStatObj && Object.keys(homeStatObj);
  const awayStatArr = awayStats?.statistics;
  const awayStatObj = awayStatArr && awayStatArr[0];
  const limitedStats = [
    "defReb",
    "offReb",
    "pFouls",
    "points",
    "steals",
    "turnovers",
  ];

  useEffect(() => {
    const homeStatsObjString = localStorage.getItem("homeStats");
    const awayStatsObjString = localStorage.getItem("awayStats");
    homeStatsObjString && setHomeStats(JSON.parse(homeStatsObjString));
    awayStatsObjString && setAwayStats(JSON.parse(awayStatsObjString));
  }, []);
  return (
    <div className={styles.matchStats}>
      <div className={styles.title}>Match Stats</div>
      <div className={styles.allStatsWrapper}>
        {homeStatKeys &&
          homeStatKeys?.map((key: string, index: number) => {
            if (limitedStats.includes(key)) {
              return (
                <div className={styles.statsRow} key={index}>
                  <div className={styles.awayStats}>
                    {awayStatObj && awayStatObj[key as keyof object]}
                  </div>
                  <div className={styles.statsTitle}>{key}</div>
                  <div className={styles.homeStats}>
                    {homeStatObj && homeStatObj[key as keyof object]}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
