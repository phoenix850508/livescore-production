import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main");
  }, [navigate]);
  return (
    <div>
      <h3>homepage</h3>
    </div>
  );
}
