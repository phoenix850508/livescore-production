import brandIcon from "icons/brandIcon.svg";
import searchIcon from "icons/searchIcon.svg";
import solidBellIcon from "icons/solidBellIcon.svg";
import basketballIcon from "icons/basketballIcon.svg";
import baseballIcon from "icons/baseballIcon.svg";
import calendarIcon from "icons/calendarIcon.svg";
import seachIconWhite from "icons/searchIconWhite.svg";
import nbaIcon from "icons/nbaIcon.svg";
import mlbIcon from "icons/mlbIcon.svg";
import {
  handleSportType,
  onFavoritesClick,
  leagueParamsProps,
  showSportType,
  showFavorites,
  onCalendarClick,
  onInputChange,
  allTeams,
} from "types/types";
import clsx from "clsx";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DateContext } from "context/DateContext";
import styles from "./Navbar.module.scss";

interface combinedNavbarTypes
  extends onFavoritesClick,
    handleSportType,
    leagueParamsProps,
    showSportType,
    showFavorites,
    onCalendarClick {}

// get teams
const allNbaTeamsStr = localStorage.getItem("allNbaTeams");
const allNbaTeams = allNbaTeamsStr && JSON.parse(allNbaTeamsStr);

const allMlbTeamsStr = localStorage.getItem("allMlbTeams");
const allMlbTeams = allMlbTeamsStr && JSON.parse(allMlbTeamsStr);

export default function Navbar(props: combinedNavbarTypes) {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleMlbTeamClick = (id: string | undefined) => {
    setSearchInput("");
    navigate(`/teamInfo/mlb/${id}`);
    setChecked(false);
  };

  const handleNbaTeamClick = (id: number | undefined) => {
    setSearchInput("");
    navigate(`/teamInfo/nba/${id}`);
    setChecked(false);
  };

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  return (
    <div className={styles.headerWrapper}>
      <header>
        <NavbarTop
          onFavoritesClick={props.onFavoritesClick}
          onBrandClick={props.onBrandClick}
          showFavorites={props.showFavorites}
          onCalendarClick={props.onCalendarClick}
          onInputChange={handleInputChange}
          inputValue={searchInput}
          checked={checked}
          onChekcboxChange={handleCheckboxToggle}
        />
        <NavbarBottom
          onBasketballClick={props.onBasketballClick}
          onBaseballClick={props.onBaseballClick}
          showSport={props.showSport}
          league={props.league}
        />
      </header>
      <div className={styles.searchResultWrapper}>
        {searchInput &&
          allNbaTeams &&
          searchNba(allNbaTeams, searchInput).map((team, index: number) => {
            return (
              <div
                className={clsx(
                  { [styles.show]: searchInput.length > 0 },
                  styles.filteredTeams
                )}
                key={index}
                onClick={() => handleNbaTeamClick?.(team.id)}
              >
                <img
                  className={styles.logo}
                  src={team.response?.logo}
                  alt="nbalogo"
                />
                <span className={styles.filteredName}>
                  {team.response?.name}
                </span>
              </div>
            );
          })}
        {searchInput &&
          allMlbTeams &&
          searchMlb(allMlbTeams, searchInput).map((team, index: number) => {
            return (
              <div
                className={clsx(
                  { [styles.show]: searchInput.length > 0 },
                  styles.filteredTeams
                )}
                key={index}
                onClick={() => handleMlbTeamClick?.(team.teamID)}
              >
                <img
                  className={styles.logo}
                  src={team.mlbLogo1}
                  alt="mlblogo"
                />
                <span
                  className={styles.filteredName}
                >{`${team.teamCity} ${team.teamName}`}</span>
              </div>
            );
          })}
        {searchInput &&
          searchLeague(["nba", "mlb"], searchInput).map(
            (league, index: number) => {
              return (
                <div
                  className={clsx(
                    { [styles.show]: searchInput.length > 0 },
                    styles.filteredTeams
                  )}
                  key={index}
                  onClick={() => {
                    setSearchInput("");
                    navigate(`/leagueInfo/${league}`);
                  }}
                >
                  <img
                    className={styles.logo}
                    src={league === "nba" ? nbaIcon : mlbIcon}
                    alt="leagueLogo"
                  />
                  <span className={styles.filteredName}>{league}</span>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

interface combinedNavTopTypes
  extends onFavoritesClick,
    showFavorites,
    onCalendarClick,
    onInputChange {}

function NavbarTop(props: combinedNavTopTypes) {
  const resetShowSport = props.onBrandClick;
  const navigate = useNavigate();
  const { state } = useContext(DateContext);
  const date = state.date;
  const location = useLocation();
  return (
    <nav className={styles.navbarTop}>
      <div
        className={styles.navbarBrand}
        onClick={(e) => {
          resetShowSport?.(e);
          navigate("/main");
        }}
      >
        <img className={styles.brandIcon} src={brandIcon} alt="brandIcon.svg" />
        <h1 className={styles.brandTitle}>Livescore</h1>
      </div>
      <div className={styles.navbarSearchBox}>
        <img
          className={styles.searchIcon}
          src={searchIcon}
          alt="searchIcon.svg"
        />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          onChange={props.onInputChange}
          value={props.inputValue}
        />
      </div>
      <div
        className={clsx(styles.navbarFavorites, {
          [styles.highlightFav]: props.showFavorites,
        })}
        onClick={props.onFavoritesClick}
      >
        <span className={styles.favorites}>Favorites</span>
        <img
          className={styles.favoriteBell}
          src={solidBellIcon}
          alt="solidBellIcon.svg"
        />
      </div>
      {/* mobile elements */}
      <div className={styles.mobileIconWrapper}>
        <div
          className={clsx(
            { [styles.noShow]: location.pathname !== "/main" },
            styles.calendarIconWrapper
          )}
          onClick={props.onCalendarClick}
        >
          <img
            className={styles.calendarIcon}
            src={calendarIcon}
            alt="calendarIcon"
          />
          <span className={styles.calendarIconText}>{date}</span>
        </div>
        <input
          id="searchToggle"
          className={styles.searchToggleCheckbox}
          type="checkbox"
          checked={props.checked}
          onChange={props.onChekcboxChange}
        />
        <label htmlFor="searchToggle">
          <img
            className={styles.searchIconWhite}
            src={seachIconWhite}
            alt="searchIcon"
          />
        </label>
        <div className={styles.dropdownSearch}>
          <div className={styles.dropdownSearchBox}>
            <img
              className={styles.dropdownSearchIcon}
              src={searchIcon}
              alt="searchIcon.svg"
            />
            <input
              className={styles.dropdownSearchInput}
              type="text"
              placeholder="Search"
              onChange={props.onInputChange}
              value={props.inputValue}
            />
          </div>
        </div>
      </div>
      {/* mobile elements */}
    </nav>
  );
}

interface combinedNavBottomTypes
  extends showSportType,
    handleSportType,
    leagueParamsProps {}

function NavbarBottom(props: combinedNavBottomTypes) {
  return (
    <nav className={styles.navbarBottom}>
      <ul className={styles.navbarIconList}>
        <li
          className={clsx({
            [styles.markBasketball]:
              props.showSport === "basketball" || props.league === "nba",
          })}
        >
          <img
            className={styles.sportsIcon}
            src={basketballIcon}
            alt="basketballIcon.svg"
            onClick={(e) => props.onBasketballClick?.(e)}
          />
          <span>Basketball</span>
        </li>
        <li
          className={clsx({
            [styles.markBaseball]:
              props.showSport === "baseball" || props.league === "mlb",
          })}
        >
          <img
            className={styles.sportsIcon}
            src={baseballIcon}
            alt="baseballIcon.svg"
            onClick={(e) => props.onBaseballClick?.(e)}
          />
          <span>Baseball</span>
        </li>
      </ul>
    </nav>
  );
}

function searchNba(teams: allTeams[], input: string) {
  return teams.filter((team) => {
    return team?.response?.name?.toLowerCase().includes(input.toLowerCase());
  });
}

function searchMlb(teams: allTeams[], input: string) {
  return teams.filter((team) => {
    return (
      team?.teamAbv?.toLowerCase().includes(input.toLowerCase()) ||
      team?.teamCity?.toLowerCase().includes(input.toLowerCase()) ||
      team?.teamName?.toLowerCase().includes(input.toLowerCase())
    );
  });
}

function searchLeague(leagues: string[], input: string) {
  return leagues.filter((league) => {
    return league.toLowerCase().includes(input.toLocaleLowerCase());
  });
}
