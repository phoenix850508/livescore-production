import Navbar from "components/header/Navbar";
import LeagueInfo from "components/leagueInfo/LeagueInfo";
import { useParams, useNavigate } from "react-router-dom";

export default function LeagueInfoPage() {
  const { league } = useParams();
  const navigate = useNavigate();
  const handleBasketballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    navigate("/leagueInfo/nba");
  };
  const handleBaseballClick = (e: React.MouseEvent<HTMLImageElement>) => {
    navigate("/leagueInfo/mlb");
  };
  return (
    <div>
      <Navbar
        league={league}
        onBasketballClick={handleBasketballClick}
        onBaseballClick={handleBaseballClick}
      />
      <LeagueInfo league={league} />
    </div>
  );
}
