import axios from "axios";

const base_url =
  "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com";

// 新增一個 instance，使用方法可見 axios interceptor readme
const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    "X-RapidAPI-Key": "bde343a922msh1feb7e1b69eeb67p1cd130jsn5e7ce6f22dd7",
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
