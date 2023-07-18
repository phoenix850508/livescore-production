import axios from "axios";

const base_url = "http://localhost:3001";

// get all nba games on date
export const getAllGames = async (date: string) => {
  try {
    const response = await axios.get(`${base_url}/date/${date}`);
    return response;
  } catch (error) {
    console.error("[GET all games failed]: ", error);
  }
};

export const getLiveGames = async () => {
  try {
    const response = await axios.get(`${base_url}/live/all`);
    return response;
  } catch (error) {
    console.error("[GET all live games filed: ]", error);
  }
};

// get team information
export const getTeam = async (id: number) => {
  try {
    const response = await axios.get(`${base_url}/team/${id}`);
    return response;
  } catch (error) {
    console.error("[GET team]: ", error);
  }
};
