import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import { nbaMatchItemProps } from "types/types";
import { useContext, useEffect } from "react";
import { MatchContext } from "context/MatchContext";
import styles from "./MlbMatchItem.module.scss";

export default function MlbMatchItem(props: nbaMatchItemProps) {
  // extract props teams
  const teams = props.teams;
  // extract props away scores
  const awayLinescore = props?.scores?.visitors?.linescore;
  const awayTotal = awayLinescore?.reduce(
    (accum: number, curr: number): number => accum + curr
  );
  // extract props home scores
  const homeLinescore = props?.scores?.home?.linescore;
  const homeTotal = homeLinescore?.reduce(
    (accum: number, curr: number): number => accum + curr
  );
  // extract props date, then slice the match hour from Sun, 02 Apr 2023 00:30:00 GMT
  const date = props?.date?.start;
  const utcDate = date && new Date(date);
  const colonIndex = utcDate?.toString()?.indexOf(":");
  const matchHour = utcDate
    ?.toString()
    ?.slice(colonIndex && colonIndex - 2, colonIndex && colonIndex + 3);
  //extract props match periods
  const periods = props.periods;
  // dispatch match
  const { dispatch } = useContext(MatchContext);
  const handleMatchClick = () => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: teams?.visitors?.id,
        nickname: teams?.visitors?.nickname,
      },
      homeTeam: {
        id: teams?.home?.id,
        nickname: teams?.home?.nickname,
      },
      scores: {
        awayTotal: awayTotal && awayTotal,
        homeTotal: homeTotal && homeTotal,
      },
    });
  };
  useEffect(() => {
    dispatch({
      type: "selectFeaturedMatch",
      awayTeam: {
        id: teams?.visitors?.id,
        nickname: teams?.visitors?.nickname,
      },
      homeTeam: {
        id: teams?.home?.id,
        nickname: teams?.home?.nickname,
      },
      scores: {
        awayTotal: awayTotal && awayTotal,
        homeTotal: homeTotal && homeTotal,
      },
    });
  }, [props]);
  return (
    <div className={styles.matchItem} onClick={handleMatchClick}>
      <div className={styles.matchSchedule}>
        <div className={styles.matchTime}>{matchHour}</div>
        <div className={styles.matchProgress}>
          {periods?.current === 4 ? "FT" : periods?.current}
        </div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>{teams?.visitors?.nickname}</div>
          <div className={styles.home}>{teams?.home?.nickname}</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>{awayTotal}</div>
          <div className={styles.homeScore}>{homeTotal}</div>
        </div>
      </div>
      <div className={styles.subscriptions}>
        <div className={styles.awayBell}>
          <img src={bellSolidIcon} alt="bellSolidIcon.svg" />
        </div>
        <div className={styles.homeBell}>
          <img src={bellEmptyIcon} alt="bellEmptyIcon.svg" />
        </div>
      </div>
    </div>
  );
}
