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
import { DateContextProvider } from "context/DateContext";
import { MatchContextProvider } from "context/MatchContext";

import "styles/reset.module.scss";
import "styles/App.module.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <DateContextProvider>
          <MatchContextProvider>
            <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="match/:league/:id" element={<MatchInfoPage />} />
              <Route path="leagueInfo/:league" element={<LeagueInfoPage />} />
              <Route
                path="teamInfo/:league/:teamId"
                element={<TeamInfoPage />}
              />
            </Routes>
          </MatchContextProvider>
        </DateContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
