import bellEmptyIcon from "icons/bellEmptyIcon.svg";
import bellSolidIcon from "icons/bellSolidIcon.svg";
import { mlbMatchItemProps, matchDataObjType } from "types/types";
import { useContext, useEffect, useState } from "react";
import { MatchContext } from "context/MatchContext";
import { getMlbMatchScore } from "api/mlb";
import { dummyMlbMatch } from "./dummyMlbMatch";
import styles from "./MlbMatchItem.module.scss";

export default function MlbMatchItem(props: mlbMatchItemProps) {
  // extract props teams
  const away = props.away;
  const home = props.home;
  // extract props id
  const awayId = Number(props?.teamIDAway);
  const homeId = Number(props?.teamIDHome);
  // extract props time
  const colonIndex = props?.gameTime?.indexOf(":");
  const timeLength = props?.gameTime?.length;
  let matchHour: string | undefined = "0";
  if (timeLength === 5) {
    matchHour = props?.gameTime?.slice(
      colonIndex && colonIndex - 1,
      colonIndex && colonIndex + 3
    );
  } else {
    matchHour = props.gameTime?.slice(
      colonIndex && colonIndex - 2,
      colonIndex && colonIndex + 3
    );
  }
  // set useState matchInforation
  const [matchDataObj, setMatchDataObj] = useState<matchDataObjType | null>(
    null
  );

  const matchAwayScore = matchDataObj && matchDataObj?.lineScore?.away?.R;
  const matchHomeScore = matchDataObj?.lineScore?.home?.R;

  const { dispatch } = useContext(MatchContext);
  const handleMatchClick = () => {
    if (matchDataObj) {
      dispatch({
        type: "selectFeaturedMatch",
        awayTeam: {
          id: awayId,
          nickname: away,
        },
        homeTeam: {
          id: homeId,
          nickname: home,
        },
        scores: {
          awayTotal: matchAwayScore,
          homeTotal: matchHomeScore,
        },
      });
    }
  };

  useEffect(() => {
    setMatchDataObj(Object.values(dummyMlbMatch)[0]);
  }, []);

  // get per match information
  // useEffect(() => {
  //   console.log("re-render useEffect");
  //   const asynGetMlbMatchScore = async () => {
  //     const response = props?.gameID && (await getMlbMatchScore(props.gameID));
  //     response && setMatchDataObj(response.data.body);
  //   };
  //   asynGetMlbMatchScore();
  // }, [props]);

  useEffect(() => {
    console.log("re-render useEffect");
    if (matchHomeScore) {
      dispatch({
        type: "selectFeaturedMatch",
        awayTeam: {
          id: awayId,
          nickname: away,
        },
        homeTeam: {
          id: homeId,
          nickname: home,
        },
        scores: {
          awayTotal: matchAwayScore,
          homeTotal: matchHomeScore,
        },
      });
    }
  }, []);

  return (
    <div className={styles.matchItem} onClick={handleMatchClick}>
      <div className={styles.matchSchedule}>
        <div className={styles.matchTime}>{matchHour}</div>
        <div className={styles.matchProgress}>
          {matchDataObj?.currentInning === "Final"
            ? "FT"
            : matchDataObj?.currentInning}
        </div>
      </div>
      <div className={styles.matchScoreBox}>
        <div className={styles.matchTeams}>
          <div className={styles.away}>{away}</div>
          <div className={styles.home}>{home}</div>
        </div>
        <div className={styles.matchScores}>
          <div className={styles.awayScore}>{matchAwayScore}</div>
          <div className={styles.homeScore}>{matchHomeScore}</div>
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
