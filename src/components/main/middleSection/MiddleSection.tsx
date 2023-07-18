import LeagueNbaPlayed from "./middleSectionComponents/LeagueNbaPlayed";
import LeagueMlbPlayed from "./middleSectionComponents/LeagueMlbPlayed";
import { DateContext } from "context/DateContext";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "api/nba";
import { getMlbGames } from "api/mlb";
import { dummyMlbGames } from "./dummyMlbGames";
import { showSportType } from "types/types";
import styles from "./MiddleSection.module.scss";

export default function MiddleSection(props: showSportType) {
  // use useState to get all games data
  const [nbaGamesOnDate, setNbaGamesOnDate] = useState<
    object | null | undefined
  >(null);
  const [mlbGamesOnDate, setMlbGamesOnDate] = useState<
    object | null | undefined
  >(null);
  const { state } = useContext(DateContext);
  // turn the date into db schema format
  let nbaDate = `${state.year}-`;
  let mlbDate = `${state.year}`;
  // avoid possibly only single digit number
  if (state.monthIndex && state.monthIndex < 9) {
    nbaDate += `0${state.monthIndex && state.monthIndex + 1}-`;
    mlbDate += `0${state.monthIndex && state.monthIndex + 1}`;
  } else {
    nbaDate += `${state.monthIndex && state.monthIndex + 1}-`;
    mlbDate += `${state.monthIndex && state.monthIndex + 1}`;
  }
  if (state.date && state.date < 10) {
    nbaDate += `0${state.date}`;
    mlbDate += `0${state.date}`;
  } else {
    nbaDate += `${state.date}`;
    mlbDate += `${state.date}`;
  }
  // control whether nba games should be shown
  const [showNba, setShowNba] = useState<boolean | null>(null);

  // control whether mlb games should be shown
  const [showMlb, setShowMlb] = useState<boolean | null>(null);

  useEffect(() => {
    const asyncGetAllGames = async () => {
      const response = await getAllGames(nbaDate);
      setNbaGamesOnDate(response && response.data);
    };
    asyncGetAllGames();
  }, [nbaDate]);

  useEffect(() => {
    // control whether nba games should be shown
    if (props.showSport === "basketball" || props.showSport === "all") {
      if (nbaGamesOnDate && Object.keys(nbaGamesOnDate)[0] === nbaDate) {
        setShowNba(true);
      } else {
        setShowNba(false);
      }
    } else {
      setShowNba(false);
    }
  }, [props.showSport, nbaDate, nbaGamesOnDate]);

  // useEffect(() => {
  //   const asyncGetMlbGames = async () => {
  //     const response = await getMlbGames(mlbDate);
  //     setMlbGamesOnDate(response && response?.data?.body);
  //     console.log(mlbGamesOnDate);
  //   };
  //   asyncGetMlbGames();
  // }, [mlbDate]);

  useEffect(() => {
    // control whether mlb games should be shown
    if (props.showSport === "baseball" || props.showSport === "all") {
      if (mlbGamesOnDate && Object.values(mlbGamesOnDate)[0]) {
        setShowMlb(true);
      }
    }
  }, [props.showSport, mlbGamesOnDate]);
  return (
    <div className={styles.middleSection}>
      <h3 className={styles.middleTitle}>Pinned Games</h3>
      {/* dummy data不管輸入資料是否正確，都會render，因此這邊需要判斷式來比對是否當天有資料 */}
      {showNba && nbaGamesOnDate ? (
        <LeagueNbaPlayed nbaGames={nbaGamesOnDate} />
      ) : mlbDate === "20230718" &&
        dummyMlbGames &&
        (props.showSport === "baseball" || props.showSport === "all") ? (
        <LeagueMlbPlayed mlbGames={dummyMlbGames} />
      ) : (
        <div className={styles.noEventsWrapper}>
          <img
            src="https://www.sofascore.com/static/images/empty_state/empty-state-no-events-1.svg"
            alt="noEvent.svg"
          />
          <h2 className={styles.emptyData}>No Events</h2>
        </div>
      )}
    </div>
  );
}
