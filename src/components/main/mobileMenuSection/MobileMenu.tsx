import clockActive from "icons/clockActive.svg";
import clock from "icons/clock.svg";
import leagueCup from "icons/leagueCup.svg";
import leagueCupActive from "icons/leagueCupActive.svg";
import favoriteBellMobile from "icons/favoriteBellMobile.svg";
import favoriteBellMobileActive from "icons/favoriteBellMobileActive.svg";
import { onFavoritesClick, onMobileIcon, showFavorites } from "types/types";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./MobileMenu.module.scss";

interface combinedType extends onFavoritesClick, onMobileIcon, showFavorites {}
export default function MobileMenu(props: combinedType) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleMatchesClick = props.onMatchesClick;
  const handleLeagueCupClick = props.onLeagueCupClick;
  const handleFavoritesClick = props.onFavoritesClick;
  const mobileIcon = localStorage.getItem("mobileIcon")
    ? localStorage.getItem("mobileIcon")
    : props.showMobileIcon;
  if (location.pathname !== "/main") localStorage.removeItem("mobileIcon");
  return (
    <div className={styles.mobileMenuWrapper}>
      <ul className={styles.iconWrapper}>
        <li
          className={styles.iconList}
          onClick={(e) => {
            navigate("/main");
            handleMatchesClick?.(e);
            localStorage.setItem("mobileIcon", "matches");
          }}
        >
          <img
            className={styles.mobileMenuIcon}
            src={mobileIcon === "matches" ? clockActive : clock}
            alt="clockActive"
          />
          <div
            className={clsx({
              [styles.underline]: mobileIcon === "matches",
            })}
          ></div>
        </li>
        <li
          className={styles.iconList}
          onClick={(e) => {
            navigate("/main");
            handleLeagueCupClick?.(e);
            localStorage.setItem("mobileIcon", "leagues");
          }}
        >
          <img
            className={styles.mobileMenuIcon}
            src={mobileIcon === "leagues" ? leagueCupActive : leagueCup}
            alt="leagueCup"
          />
          <div
            className={clsx({
              [styles.underline]: mobileIcon === "leagues",
            })}
          ></div>
        </li>
        <li
          className={styles.iconList}
          onClick={(e) => {
            navigate("/main");
            handleFavoritesClick?.(e);
            localStorage.setItem("mobileIcon", "favorites");
          }}
        >
          <img
            className={styles.mobileMenuIcon}
            src={
              mobileIcon === "favorites"
                ? favoriteBellMobileActive
                : favoriteBellMobile
            }
            alt="favoriteBellMobile"
          />
          <div
            className={clsx({
              [styles.underline]: mobileIcon === "favorites",
            })}
          ></div>
        </li>
      </ul>
    </div>
  );
}
