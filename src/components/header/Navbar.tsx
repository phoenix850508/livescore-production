import brandIcon from "icons/brandIcon.svg";
import searchIcon from "icons/searchIcon.svg";
import solidBellIcon from "icons/solidBellIcon.svg";
import basketballIcon from "icons/basketballIcon.svg";
import baseballIcon from "icons/baseballIcon.svg";
import calendarIcon from "icons/calendarIcon.svg";
import seachIconWhite from "icons/searchIconWhite.svg";
import {
  handleSportType,
  onFavoritesClick,
  leagueParamsProps,
  showSportType,
  showFavorites,
  onCalendarClick,
} from "types/types";
import clsx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DateContext } from "context/DateContext";
import styles from "./Navbar.module.scss";

interface combinedNavbarTypes
  extends onFavoritesClick,
    handleSportType,
    leagueParamsProps,
    showSportType,
    showFavorites,
    onCalendarClick {}

export default function Navbar(props: combinedNavbarTypes) {
  return (
    <header>
      <NavbarTop
        onFavoritesClick={props.onFavoritesClick}
        onBrandClick={props.onBrandClick}
        showFavorites={props.showFavorites}
        onCalendarClick={props.onCalendarClick}
      />
      <NavbarBottom
        onBasketballClick={props.onBasketballClick}
        onBaseballClick={props.onBaseballClick}
        showSport={props.showSport}
        league={props.league}
      />
    </header>
  );
}

interface combinedNavTopTypes
  extends onFavoritesClick,
    showFavorites,
    onCalendarClick {}

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
      <div className={styles.mobileIconWrapper} onClick={props.onCalendarClick}>
        <div
          className={clsx(
            { [styles.noShow]: location.pathname !== "/main" },
            styles.calendarIconWrapper
          )}
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
