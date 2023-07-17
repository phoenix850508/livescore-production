import brandIcon from "icons/brandIcon.svg";
import searchIcon from "icons/searchIcon.svg";
import solidBellIcon from "icons/solidBellIcon.svg";
import basketballIcon from "icons/basketballIcon.svg";
import baseballIcon from "icons/baseballIcon.svg";
import { useNavigate } from "react-router-dom";
import { handleSportType } from "types/types";
import stlyes from "./Navbar.module.scss";

export default function Navbar(props: handleSportType) {
  return (
    <header>
      <NavbarTop />
      <NavbarBottom
        onBasketballClick={props.onBasketballClick}
        onBaseballClick={props.onBaseballClick}
      />
    </header>
  );
}

function NavbarTop() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };
  return (
    <nav className={stlyes.navbarTop}>
      <div className={stlyes.navbarBrand} onClick={handleClick}>
        <img src={brandIcon} alt="brandIcon.svg" />
        <h1 className={stlyes.brandTitle}>Livescore</h1>
      </div>
      <div className={stlyes.navbarSearchBox}>
        <img
          className={stlyes.searchIcon}
          src={searchIcon}
          alt="searchIcon.svg"
        />
        <input
          className={stlyes.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={stlyes.navbarFavorites}>
        <span className={stlyes.favorites}>Favorites</span>
        <img src={solidBellIcon} alt="solidBellIcon.svg" />
      </div>
    </nav>
  );
}

function NavbarBottom(props: handleSportType) {
  return (
    <nav className={stlyes.navbarBottom}>
      <ul className={stlyes.navbarIconList}>
        <li>
          <img
            className={stlyes.sportsIcon}
            src={basketballIcon}
            alt="basketballIcon.svg"
            onClick={(e) => props.onBasketballClick?.(e)}
          />
          <span>Basketball</span>
        </li>
        <li>
          <img
            className={stlyes.sportsIcon}
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
