const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const base_url = "https://api-nba-v1.p.rapidapi.com";
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
};

app.use(express.static(path.join(__dirname, "./build")));

app.get("/api", (req, res) => {
  res.send("express in running in the backend");
});

// get nba matches per date
app.get("/api/date/:date", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/games?date=${req.params.date}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get nba teams
app.get("/api/teams/:id", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/teams?id=${req.params.id}`,
    headers,
  };
  if (req.params.id === "all") {
    options.url = `${base_url}/teams`;
  }
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get nba match stats
app.get("/api/stats/:id", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/games/statistics?id=${req.params.id}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get nba match info
app.get("/api/game/:id", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/games?id=${req.params.id}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get nba league standing
app.get("/api/standing/:league/:season/:conference", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/standings?league=${req.params.league}&season=${req.params.season}&conference=${req.params.conference}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get nba team all season games
app.get("/api/gamesPerTeamAndSeason/:season/:teamId", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/games?season=${req.params.season}&team=${req.params.teamId}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

// get mlb line scores
app.get("/mlb/linescore/:gameID", async (req, res) => {
  const options = {
    method: "GET",
    url: `${base_url}/getMLBLineScore?gameID=${req.params.gameID}`,
    headers,
  };
  try {
    const response = await axios.request(options);
    res.json(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
