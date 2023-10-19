import nbaIcon from "icons/nbaIcon.svg";
import mlbIcon from "icons/mlbIcon.svg";
import usaIcon from "icons/usaIcon.svg";
import { useContext } from "react";
import { SeasonContext } from "context/SeasonContext";
import { leagueParamsProps } from "types/types";
import styles from "./LeagueTitle.module.scss";

export default function LeagueTitle(props: leagueParamsProps) {
  const { dispatch } = useContext(SeasonContext);
  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "selectSeason",
      season: e.target.value,
    });
  };
  return (
    <div className={styles.leagueTitle}>
      <img
        className={styles.leagueLogo}
        src={props.league === "nba" ? nbaIcon : mlbIcon}
        alt="leagueIcon.svg"
      />
      <div className={styles.titleRight}>
        <div className={styles.titleName}>
          {props.league === "nba" && "National Basketball Association"}
          {props.league === "mlb" && "Major League Baseball"}
        </div>
        <div className={styles.location}>
          <img
            className={styles.locationLogo}
            src={usaIcon}
            alt="usaIcon.svg"
          />
          <div className={styles.locationName}>United States</div>
          <select
            className={styles.season}
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
        </div>
      </div>
    </div>
  );
}
