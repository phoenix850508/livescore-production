import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  MainPage,
  MatchInfoPage,
  LeagueInfoPage,
  TeamInfoPage,
} from "pages";
import "styles/reset.module.scss";
import "styles/App.module.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="match" element={<MatchInfoPage />} />
          <Route path="leagueInfo" element={<LeagueInfoPage />} />
          <Route path="teamInfo" element={<TeamInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
