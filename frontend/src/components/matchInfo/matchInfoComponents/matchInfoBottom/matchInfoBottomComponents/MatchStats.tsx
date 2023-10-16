import { useState, useEffect } from "react";
import {
  matchStatsType,
  nbaMatchStatsObjectType,
  mlbteamStatsType,
  mobileStatsProps,
} from "types/types";
import clsx from "clsx";
import styles from "./MatchStats.module.scss";

interface combinedType
  extends nbaMatchStatsObjectType,
    mlbteamStatsType,
    mobileStatsProps {}

export default function MatchStats(props: combinedType) {
  const [nbaHomeStats, setNbaHomeStats] = useState<
    null | undefined | matchStatsType
  >(null);
  const [nbaAwayStats, setNbaAwayStats] = useState<
    null | undefined | matchStatsType
  >(null);
  const [mlbHomeStats, setMlbHomeStats] = useState<
    mlbteamStatsType | matchStatsType | null
  >(null);
  const [mlbAwayStats, setMlbAwayStats] = useState<
    mlbteamStatsType | matchStatsType | null | undefined
  >(null);
  // nba decompose localStorage/props obj
  const nbaHomeStatArr = nbaHomeStats?.statistics;
  const nbaHomeStatObj = nbaHomeStatArr && nbaHomeStatArr[0];
  const nbaHomeStatKeys = nbaHomeStatObj && Object.keys(nbaHomeStatObj);
  const nbaAwayStatArr = nbaAwayStats?.statistics;
  const nbaAwayStatObj = nbaAwayStatArr && nbaAwayStatArr[0];

  // mlb decompose localStorage/props obj
  const mlbHomeStatObj = mlbHomeStats && {
    ...mlbHomeStats?.Hitting,
    ...mlbHomeStats?.Pitching,
    ...mlbHomeStats?.BaseRunning,
  };
  const mlbAwayStatObj = mlbAwayStats && {
    ...mlbAwayStats?.Hitting,
    ...mlbAwayStats?.Pitching,
    ...mlbAwayStats?.BaseRunning,
  };
  const mlbHomeStatKeys = mlbHomeStatObj && Object.keys(mlbHomeStatObj);

  const limitedNbaStats = [
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

  const limitedMlbStats = [
    "R",
    "H",
    "2B",
    "3B",
    "CS",
    "PO",
    "SB",
    "BB",
    "TB",
    "Batters Faced",
    "Flyouts",
    "Groundouts",
    "Pitches",
    "Strikes",
    "Wild Pitch",
  ];

  // get localStorage obj data
  // useEffect(() => {
  //   const matchInfoObjString = localStorage.getItem("matchInfoObj");
  //   const matchInfoObj = matchInfoObjString && JSON.parse(matchInfoObjString);
  //   // fot nba
  //   if (matchInfoObj && matchInfoObj.leagueType === "nba") {
  //     const homeStatsObjString = localStorage.getItem("homeStats");
  //     const awayStatsObjString = localStorage.getItem("awayStats");
  //     if (homeStatsObjString) setNbaHomeStats(JSON.parse(homeStatsObjString));
  //     if (awayStatsObjString) setNbaAwayStats(JSON.parse(awayStatsObjString));
  //   }
  //   // for mlb
  //   if (matchInfoObj && matchInfoObj.leagueType === "mlb") {
  //     const homeStatsObjString = localStorage.getItem("homeStats");
  //     const awayStatsObjString = localStorage.getItem("awayStats");
  //     if (homeStatsObjString) setMlbHomeStats(JSON.parse(homeStatsObjString));
  //     if (awayStatsObjString) setMlbAwayStats(JSON.parse(awayStatsObjString));
  //   }
  // }, []);

  // get props obj data
  useEffect(() => {
    // for nba
    if (props.leagueType === "nba") {
      const propsAwayStats = props?.awayStats;
      const propsHomeStats = props.homeStats;
      propsAwayStats && setNbaHomeStats(propsHomeStats);
      propsHomeStats && setNbaAwayStats(propsAwayStats);
    }
    // for mlb
    if (props.leagueType === "mlb") {
      const propsAwayStats = props?.awayStats;
      const propsHomeStats = props.homeStats;
      propsAwayStats && setMlbAwayStats(propsAwayStats);
      propsHomeStats && setMlbHomeStats(propsHomeStats);
    }
  }, [props.leagueType, props?.awayStats, props.homeStats]);

  return (
    <div
      className={clsx(
        { [styles.noShow]: props.activeMenu === "details" },
        styles.matchStats
      )}
    >
      <div className={styles.title}>Match Stats</div>
      <div className={styles.allStatsWrapper}>
        {nbaHomeStatKeys &&
          nbaHomeStatKeys?.map((key: string, index: number) => {
            if (limitedNbaStats.includes(key)) {
              const awayKeyStat =
                nbaAwayStatObj && nbaAwayStatObj[key as keyof object];
              const homeKeyStat =
                nbaHomeStatObj && nbaHomeStatObj[key as keyof object];
              return (
                <div className={styles.statsRow} key={index}>
                  <div
                    className={clsx(
                      {
                        [styles.awayStat]:
                          awayKeyStat && awayKeyStat <= homeKeyStat,
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat && awayKeyStat > homeKeyStat,
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
                          awayKeyStat && homeKeyStat <= awayKeyStat,
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat && homeKeyStat > awayKeyStat,
                      }
                    )}
                  >
                    {homeKeyStat}
                  </div>
                </div>
              );
            }
          })}
        {mlbHomeStatKeys &&
          mlbHomeStatKeys?.map((key: string, index: number) => {
            if (limitedMlbStats.includes(key)) {
              const awayKeyStat =
                mlbAwayStatObj && mlbAwayStatObj[key as keyof object];
              const homeKeyStat =
                mlbHomeStatObj && mlbHomeStatObj[key as keyof object];
              return (
                <div className={styles.statsRow} key={index}>
                  <div
                    className={clsx(
                      {
                        [styles.awayStat]:
                          awayKeyStat &&
                          Number(awayKeyStat) <= Number(homeKeyStat),
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat &&
                          Number(awayKeyStat) > Number(homeKeyStat),
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
                          awayKeyStat &&
                          Number(homeKeyStat) <= Number(awayKeyStat),
                      },
                      {
                        [styles.highlightStats]:
                          awayKeyStat &&
                          Number(homeKeyStat) > Number(awayKeyStat),
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
