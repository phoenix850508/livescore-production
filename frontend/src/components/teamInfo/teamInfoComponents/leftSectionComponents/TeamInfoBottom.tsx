import MatchesLeft from "./matchesComponents/MatchesLeft";
import { nbaMatchItemArray, mobileTeamProps } from "types/types";
import { useContext } from "react";
import { SeasonContext } from "context/SeasonContext";
import clsx from "clsx";
import styles from "./TeamInfoBottom.module.scss";

interface combinedProps extends nbaMatchItemArray, mobileTeamProps {}
export default function TeamInfoBottom(props: combinedProps) {
  const { dispatch } = useContext(SeasonContext);
  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "selectSeason",
      season: e.target.value,
    });
  };
  return (
    <div
      className={clsx(
        { [styles.noShow]: props.activeMenu === "details" },
        styles.teamInfoBottom
      )}
    >
      <div className={styles.title}>Matches</div>
      <select
        className={styles.seasonSelect}
        name="season"
        id="season"
        onChange={handleSeasonChange}
      >
        {props.league === "mlb" && <option value="2023">2023</option>}
        {props.league === "nba" && (
          <>
            <option value="2023">23/24</option>
            <option value="2022">22/23</option>
            <option value="2021">21/22</option>
          </>
        )}
      </select>
      <div className={styles.matches}>
        <MatchesLeft league={props.league} matches={props.matches} />
      </div>
    </div>
  );
}
