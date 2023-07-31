import { matchInfoObj, mlbMatchInfoType, mobileStatsProps } from "types/types";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./MatchInfoBottomRight.module.scss";

interface combinedMatchInfpType extends mlbMatchInfoType, matchInfoObj {}
interface combinedPropsType extends matchInfoObj, mobileStatsProps {}

export default function MatchInfo(props: combinedPropsType) {
  const [matchInfoObj, setMatchInfoObj] =
    useState<null | combinedMatchInfpType>(null);
  const [periodsPercentString, setPeriodsPercentString] = useState<
    string | undefined | 0
  >("");
  let awayScores: null | number[] | string[] | undefined = null;
  let homeScores: null | number[] | string[] | undefined = null;

  const periods = props.periods ? props.periods : matchInfoObj?.periods;
  let periodsPercent: number | undefined | 0 | null = 0;

  if (props?.awayScores || props?.homeScores) {
    awayScores = props?.awayScores;
    homeScores = props?.homeScores;
  } else {
    if (matchInfoObj?.leagueType === "nba") {
      awayScores = matchInfoObj && matchInfoObj.awayScores;
      homeScores = matchInfoObj && matchInfoObj.homeScores;
    }
    if (matchInfoObj?.leagueType === "mlb") {
      const awayScoresObj = matchInfoObj?.lineScore?.away?.scoresByInning;
      awayScores = awayScoresObj && Object.values(awayScoresObj);
      const homeScoresObj = matchInfoObj?.lineScore?.home?.scoresByInning;
      homeScores = homeScoresObj && Object.values(homeScoresObj);
    }
  }

  useEffect(() => {
    const matchInfoObjString = localStorage.getItem("matchInfoObj");
    matchInfoObjString && setMatchInfoObj(JSON.parse(matchInfoObjString));
  }, []);

  useEffect(() => {
    periodsPercent = awayScores && Number(periods) / awayScores?.length;
    if (periodsPercent === 1) {
      setPeriodsPercentString("100%");
    } else {
      periodsPercent && setPeriodsPercentString(periodsPercent.toString());
    }
  });
  return (
    <div
      className={clsx(
        { [styles.noShow]: props.activeMenu === "statistics" },
        styles.matchInfo
      )}
    >
      <div className={styles.title}>Match Info</div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              {awayScores &&
                awayScores.map((score: number | string, index: number) => {
                  return (
                    <th key={index}>
                      {index + 1}
                      {(props.leagueType
                        ? props.leagueType
                        : matchInfoObj?.leagueType) === "nba"
                        ? "Q"
                        : ""}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {awayScores &&
                awayScores.map((score: number | string, index: number) => {
                  return <td key={index}>{score}</td>;
                })}
            </tr>
            <tr>
              {homeScores &&
                homeScores.map((score: number | string, index: number) => {
                  return <td key={index}>{score}</td>;
                })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineBody}>
          <div className={styles.rectangle}>
            <div className={styles.halftime}></div>
            <div
              className={styles.timelineBar}
              style={{ position: "absolute", left: periodsPercentString }}
            ></div>
            <div
              className={styles.timeLayer}
              style={{
                position: "absolute",
                height: "100%",
                opacity: "0.3",
                left: "0",
                width: periodsPercentString,
              }}
            ></div>
          </div>
        </div>
        <div className={styles.timecodeWrapper}>
          <div className={styles.startTime}>
            {props.matchHour ? props.matchHour : matchInfoObj?.matchHour}
          </div>
          {/* only nba uses halftime, mlb will use innings to view the timeline */}
          <div className={styles.halftime}>HT</div>
          <div className={styles.fulltime}>FT</div>
        </div>
      </div>
      <div className={styles.arena}>
        <h3 className={styles.arenaTitle}>Arena</h3>
        <div className={styles.areanaName}>Name: Ball Arena</div>
        <div className={styles.areanaCity}>City: Denver</div>
        <div className={styles.areanaState}>State: CO</div>
      </div>
      <div className={styles.officials}>
        <h3 className={styles.officialsTitle}>Officials</h3>
        <div className={styles.officialsName}>Tom Washington</div>
        <div className={styles.officialsName}>Bill Kennedy</div>
        <div className={styles.officialsName}>Marat Kogut</div>
      </div>
    </div>
  );
}
