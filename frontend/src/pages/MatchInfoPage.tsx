import Navbar from "components/header/Navbar";
import MatchInfo from "components/matchInfo/MatchInfo";
import MobileMenu from "components/main/mobileMenuSection/MobileMenu";
import { useEffect } from "react";

export default function MatchInfoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <Navbar />
      <MatchInfo />
      <MobileMenu />
    </div>
  );
}
