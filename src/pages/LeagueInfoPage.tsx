import Navbar from "components/header/Navbar";
import LeagueInfo from "components/leagueInfo/LeagueInfo";
import { useParams } from "react-router-dom";

export default function LeagueInfoPage() {
  const { league } = useParams();
  return (
    <div>
      <Navbar league={league} />
      <LeagueInfo />
    </div>
  );
}
