import brandIcon from "icons/brandIcon.svg";
import searchIcon from "icons/searchIcon.svg";
import solidBellIcon from "icons/solidBellIcon.svg";
import basketballIcon from "icons/basketballIcon.svg";
import baseballIcon from "icons/baseballIcon.svg";
import {
  handleSportType,
  onFavoritesClick,
  leagueParamsProps,
  showSportType,
  showFavorites,
} from "types/types";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

interface combinedNavbarTypes
  extends onFavoritesClick,
    handleSportType,
    leagueParamsProps,
    showSportType,
    showFavorites {}

export default function Navbar(props: combinedNavbarTypes) {
  return (
    <header>
      <NavbarTop
        onFavoritesClick={props.onFavoritesClick}
        onBrandClick={props.onBrandClick}
        showFavorites={props.showFavorites}
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

interface combinedNavTopTypes extends onFavoritesClick, showFavorites {}

function NavbarTop(props: combinedNavTopTypes) {
  const resetShowSport = props.onBrandClick;
  const navigate = useNavigate();
  return (
    <nav className={styles.navbarTop}>
      <div
        className={styles.navbarBrand}
        onClick={(e) => {
          resetShowSport?.(e);
          navigate("/main");
        }}
      >
        <img src={brandIcon} alt="brandIcon.svg" />
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
        <img src={solidBellIcon} alt="solidBellIcon.svg" />
      </div>
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
