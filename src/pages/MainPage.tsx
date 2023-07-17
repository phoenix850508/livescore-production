import Navbar from "components/header/Navbar";
import Main from "components/main/Main";
import { useState } from "react";

export default function MainPage() {
  // use useState to control which sport to shown
  const [showSport, setShowSport] = useState("all");
  const handleBasketballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("basketball");
  };
  const handleBaseballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setShowSport("baseball");
  };
  return (
    <div>
      <Navbar
        onBasketballClick={handleBasketballClick}
        onBaseballClick={handleBaseballClick}
      />
      <Main showSport={showSport} />
    </div>
  );
}
