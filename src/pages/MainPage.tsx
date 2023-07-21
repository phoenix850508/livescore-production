import Navbar from "components/header/Navbar";
import Main from "components/main/Main";
import { useState } from "react";

export default function MainPage() {
  // use useState to control which sport to shown
  const [showSport, setShowSport] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const handleBasketballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("basketball");
    setShowFavorites(false);
  };
  const handleBaseballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("baseball");
    setShowFavorites(false);
  };
  // use useState to control whether shos favorites
  const handleFavoritesClick = () => {
    setShowFavorites(!showFavorites);
  };
  // when main is clicked, navigate to main page
  const handleBrandClick = () => {
    setShowFavorites(false);
    setShowSport("all");
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
      />
      <Main showSport={showSport} showFavorites={showFavorites} />
    </div>
  );
}
