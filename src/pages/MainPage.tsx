import Navbar from "components/header/Navbar";
import Main from "components/main/Main";
import MobileMenu from "components/main/mobileMenuSection/MobileMenu";
import { DateContext } from "context/DateContext";
import { useState, useRef, useEffect, useContext } from "react";

export default function MainPage() {
  // use useState to control which sport to shown
  const [showSport, setShowSport] = useState("all");
  const [showFavorites, setShowFavorites] = useState(
    // eslint-disable-next-line no-restricted-globals
    screen.width <= 1010 ? true : false
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMobileIcon, setShowMobileIcon] = useState<string | null>(
    localStorage.getItem("mobileIcon")
      ? localStorage.getItem("mobileIcon")
      : "matches"
  );
  const calendarRef = useRef<null | HTMLDivElement>(null);
  const middleSecRef = useRef<null | HTMLDivElement>(null);
  const handleBasketballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("basketball");
    setShowFavorites(false);
  };
  const handleBaseballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("baseball");
    setShowFavorites(false);
  };
  // use useState to control whether shows favorites
  const handleFavoritesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowFavorites(!showFavorites);
    setShowMobileIcon("favorites");
  };
  // when main is clicked, navigate to main page
  const handleBrandClick = () => {
    setShowFavorites(false);
    setShowSport("all");
  };
  // when mobile calendar icon is clicked
  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
    // scroll to the calendar window
    setTimeout(() => {
      calendarRef.current &&
        calendarRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
    }, 0);
  };

  // when the mobile matches icon is clicked
  const handleMatchesClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMobileIcon("matches");
    setShowFavorites(false);
  };
  // when the mobile league icon is clicked
  const handleLeagueCupClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMobileIcon("leagues");
    setShowFavorites(false);
  };

  // when date is selected, mobile calendat collapse
  const { state } = useContext(DateContext);
  useEffect(() => {
    setShowCalendar(false);
    middleSecRef.current &&
      middleSecRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end",
      });
  }, [state]);

  return (
    <div>
      <Navbar
        onBasketballClick={handleBasketballClick}
        onBaseballClick={handleBaseballClick}
        showSport={showSport}
        onFavoritesClick={handleFavoritesClick}
        onBrandClick={handleBrandClick}
        showFavorites={showFavorites}
        onCalendarClick={handleCalendarClick}
      />
      <Main
        showSport={showSport}
        showFavorites={showFavorites}
        showCalendar={showCalendar}
        onLeagueCupClick={handleLeagueCupClick}
        showMobileIcon={showMobileIcon}
        onFavoritesClick={handleFavoritesClick}
        calendarRef={calendarRef}
        middleSecRef={middleSecRef}
      />
      <MobileMenu
        onMatchesClick={handleMatchesClick}
        onLeagueCupClick={handleLeagueCupClick}
        showMobileIcon={showMobileIcon}
        onFavoritesClick={handleFavoritesClick}
        showFavorites={showFavorites}
      />
    </div>
  );
}
