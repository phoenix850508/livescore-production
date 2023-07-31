const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// the following code allows me to use json-server data after deployment
// json-server code starts
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(port, () => {
  console.log("Server is running");
});
// json-server code ends

// require("dotenv").config();
// const base_url =
//   "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com";

// app.get("/", (req, res) => {
//   res.send("Express in running in the backend");
// });

// app.use(cors());

// const headers = {
//   "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
//   "X-RapidAPI-Host":
//     "tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com",
// };

// // get mlb matches per date
// app.get("/mlb/date/:date", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: `${base_url}/getMLBGamesForDate?gameDate=${req.params.date}`,
//     headers,
//   };
//   try {
//     const response = await axios.request(options);
//     res.json(response.data);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// });

// // get mlb line scores
// app.get("/mlb/linescore/:gameID", async (req, res) => {
//   const options = {
//     method: "GET",
//     url: `${base_url}/getMLBLineScore?gameID=${req.params.gameID}`,
//     headers,
//   };
//   try {
//     const response = await axios.request(options);
//     res.json(response.data);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.listen(port, () => {
//   console.log(`Express app listening at http://localhost:${port}`);
// });
