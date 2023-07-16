import LeaguePlayed from "./middleSectionComponents/LeaguePlayed";
import { DateContext } from "context/DateContext";
import { useContext, useEffect, useState } from "react";
import { getAllGames } from "api/nba";
import styles from "./MiddleSection.module.scss";

export default function MiddleSection() {
  // define useState to get all games data
  const [gamesOnDate, setGamesOnDate] = useState<object | null | undefined>(
    null
  );
  const { state } = useContext(DateContext);
  // turn the date into db schema format
  let date = `${state.year}-`;
  // avoid possibly only single digit number
  if (state.monthIndex && state.monthIndex < 9) {
    date += `0${state.monthIndex && state.monthIndex + 1}-`;
  } else {
    date += `${state.monthIndex && state.monthIndex + 1}-`;
  }
  if (state.date && state.date < 10) {
    date += `0${state.date}`;
  } else {
    date += `${state.date}`;
  }
  console.log(date);
  useEffect(() => {
    const asyncGetAllGames = async () => {
      const response = await getAllGames(date);
      setGamesOnDate(response && response.data);
      console.log(response && gamesOnDate);
    };
    asyncGetAllGames();
  }, [date]);
  return (
    <div className={styles.middleSection}>
      <h3 className={styles.middleTitle}>Pinned Games</h3>
      {/* dummy data不管輸入資料是否正確，都會render，因此這邊需要判斷式來比對是否當天有資料 */}
      {gamesOnDate &&
        (Object.keys(gamesOnDate)[0] === date ? (
          <LeaguePlayed nbaGames={gamesOnDate} />
        ) : (
          <div className={styles.noEventsWrapper}>
            <img
              src="https://www.sofascore.com/static/images/empty_state/empty-state-no-events-1.svg"
              alt="noEvent.svg"
            />
            <h2 className={styles.emptyData}>No Events</h2>
          </div>
        ))}
    </div>
  );
}
