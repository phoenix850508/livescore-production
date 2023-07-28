import Navbar from "components/header/Navbar";
import MatchInfo from "components/matchInfo/MatchInfo";
import MobileMenu from "components/main/mobileMenuSection/MobileMenu";

export default function MatchInfoPage() {
  return (
    <div>
      <Navbar />
      <MatchInfo />
      <MobileMenu />
    </div>
  );
}
