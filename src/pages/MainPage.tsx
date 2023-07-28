import Navbar from "components/header/Navbar";
import Main from "components/main/Main";
import MobileMenu from "components/main/mobileMenuSection/MobileMenu";
import { useState } from "react";

export default function MainPage() {
  // use useState to control which sport to shown
  const [showSport, setShowSport] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMobileIcon, setShowMobileIcon] = useState<string | null>(
    localStorage.getItem("mobileIcon")
  );
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
  };

  // when the mobile matches icon is clicked
  const handleMatchesClick = () => {
    setShowMobileIcon("matches");
  };
  // when the mobile league icon is clicked
  const handleLeagueCupClick = () => {
    setShowMobileIcon("leagues");
  };

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
