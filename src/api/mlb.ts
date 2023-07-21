import axios from "axios";

const base_url =
  "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com";

// 新增一個 instance，使用方法可見 axios interceptor readme
const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host":
      "tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com",
  },
});

// get all mlb games on date
export const getMlbGames = async (date: string) => {
  try {
    const response = axiosInstance.get(
      `${base_url}/getMLBGamesForDate?gameDate=${date}`
    );
    return response;
  } catch (error) {
    console.error("GET mlb games failed: ", error);
  }
};

// get per match line score
export const getMlbMatchScore = async (gameID: string) => {
  try {
    const response = axiosInstance.get(
      `${base_url}/getMLBLineScore?gameID=${gameID}`
    );
    return response;
  } catch (error) {
    console.error(["GET mlb match score failed: ", error]);
  }
};
