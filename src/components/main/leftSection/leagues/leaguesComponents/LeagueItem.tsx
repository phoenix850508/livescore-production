import dropdownIcon from "icons/dropdownIcon.svg";
import collapseIcon from "icons/collapseIcon.svg";
import { locationProps } from "types/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import styles from "./LeagueItem.module.scss";

export default function LeagueItem(props: locationProps) {
  const [toggleDown, setToggleDown] = useState(false);
  const navigate = useNavigate();
  // onClick event will trigger dropdown menu or collapse
  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setToggleDown(!toggleDown);
  };
  return (
    <>
      <div
        className={clsx(styles.leagueItem, {
          [styles.leagueItemFocus]: toggleDown,
        })}
        onClick={handleDropdownClick}
      >
        <div className={styles.leagueInfoWrapper}>
          <img
            className={styles.flags}
            src={props.locationIcon[0]}
            alt="usaIcon.svg"
          />
          <span>{props.locationTitle[0]}</span>
        </div>
        <img
          src={toggleDown ? collapseIcon : dropdownIcon}
          alt="dropdownIcon.svg"
        />
      </div>
      {toggleDown && props.leagueArr ? (
        <ul>
          {props.leagueArr.map((league: string, index: number) => {
            const handleLeagueClick = () => {
              navigate("/leagueInfo");
            };
            return (
              <li
                className={styles.dropdownMenu}
                key={index}
                onClick={handleLeagueClick}
              >
                {league}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
