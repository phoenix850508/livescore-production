import Navbar from "components/header/Navbar";
import TeamInfo from "components/teamInfo/TeamInfo";
import MobileMenu from "components/main/mobileMenuSection/MobileMenu";

export default function TeamInfoPage() {
  return (
    <div>
      <Navbar />
      <TeamInfo />
      <MobileMenu />
    </div>
  );
}
