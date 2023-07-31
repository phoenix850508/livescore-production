import axios from "axios";

const base_url = "http://localhost:3001";

// 新增一個 instance，使用方法可見 axios interceptor readme
const axiosInstance = axios.create({
  baseURL: base_url,
});

// get all mlb games on date
export const getMlbGames = async (date: string) => {
  try {
    const response = axiosInstance.get(`${base_url}/mlb/date/${date}`);
    return response;
  } catch (error) {
    console.error("GET mlb games failed: ", error);
  }
};

// get per mlb match line score
export const getMlbMatchScore = async (gameID: string) => {
  try {
    const response = axiosInstance.get(`${base_url}/mlb/linescore/${gameID}`);
    return response;
  } catch (error) {
    console.error(["GET mlb match score failed: ", error]);
  }
};
