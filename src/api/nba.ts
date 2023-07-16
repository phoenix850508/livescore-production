import axios from "axios";

const base_url = "http://localhost:3001";

export const getAllGames = async (date: string) => {
  try {
    const response = await axios.get(`${base_url}/date/${date}`);
    return response;
  } catch (error) {
    console.error("[GET all games failed]: ", error);
  }
};

export const getTeam = async (id: number) => {
  try {
    const response = await axios.get(`${base_url}/team/${id}`);
    return response;
  } catch (error) {
    console.error("[GET team]: ", error);
  }
};
