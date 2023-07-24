import { useState, useEffect } from "react";
import { matchStatsType, matchStatsObjectType } from "types/types";
import clsx from "clsx";
import styles from "./MatchStats.module.scss";

export default function MatchStats(props: matchStatsObjectType) {
  const [homeStats, setHomeStats] = useState<null | undefined | matchStatsType>(
    null
  );
  const [awayStats, setAwayStats] = useState<null | undefined | matchStatsType>(
    null
  );
  const homeStatArr = homeStats?.statistics;
  const homeStatObj = homeStatArr && homeStatArr[0];
  const homeStatKeys = homeStatObj && Object.keys(homeStatObj);
  const awayStatArr = awayStats?.statistics;
  const awayStatObj = awayStatArr && awayStatArr[0];

  const limitedStats = [
    "assists",
    "blocks",
    "defReb",
    "fga",
    "fgm",
    "offReb",
    "pFouls",
    "points",
    "steals",
    "steals",
    "totReb",
    "tpa",
    "tpm",
    "turnovers",
  ];

  useEffect(() => {
    const homeStatsObjString = localStorage.getItem("homeStats");
    const awayStatsObjString = localStorage.getItem("awayStats");
    homeStatsObjString && setHomeStats(JSON.parse(homeStatsObjString));
    awayStatsObjString && setAwayStats(JSON.parse(awayStatsObjString));
  }, []);

  useEffect(() => {
    const propsAwayStats = props?.awayStats;
    const propsHomeStats = props.homeStats;
    propsAwayStats && setHomeStats(propsHomeStats);
    propsHomeStats && setAwayStats(propsAwayStats);
  }, [props]);
  return (
    <div className={styles.matchStats}>
      <div className={styles.title}>Match Stats</div>
      <div className={styles.allStatsWrapper}>
        {homeStatKeys &&
          homeStatKeys?.map((key: string, index: number) => {
            if (limitedStats.includes(key)) {
              const awayKeyStat =
                awayStatObj && awayStatObj[key as keyof object];
              const homeKeyStat =
                homeStatObj && homeStatObj[key as keyof object];
              return (
                <div className={styles.statsRow} key={index}>
                  <div
                    className={clsx(
                      {
                        [styles.awayStat]:
                          awayKeyStat && awayKeyStat < homeKeyStat,
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat && awayKeyStat >= homeKeyStat,
                      }
                    )}
                  >
                    {awayKeyStat}
                  </div>
                  <div className={styles.statsTitle}>{key}</div>
                  <div
                    className={clsx(
                      {
                        [styles.homeStat]:
                          awayKeyStat && homeKeyStat < awayKeyStat,
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat && homeKeyStat >= awayKeyStat,
                      }
                    )}
                  >
                    {homeKeyStat}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
