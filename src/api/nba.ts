import axios from "axios";

const base_url = "https://livescore-2f15c0310cf4.herokuapp.com/api";

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
export const getTeam = async (id: number | string) => {
  try {
    const response = await axios.get(`${base_url}/team/${id}`);
    return response;
  } catch (error) {
    console.error("[GET team failed]: ", error);
  }
};

export const getgamePerSeasonPerTeam = async (
  season: number | string,
  teamId: number | string
) => {
  try {
    const response = await axios.get(
      `${base_url}/gamesPerTeamAndSeason?gamesPerTeamAndSeason=${season}/teamId?teamId=${teamId}`
    );
    return response;
  } catch (error) {
    console.error("[GET games per season/team failed]: ", error);
  }
};

//get teams per conference
export const getTeamsConference = async (conference: string) => {
  try {
    const response = await axios.get(`${base_url}/teams/${conference}`);
    return response;
  } catch (error) {
    console.error("[GET team per conference failed]: ", error);
  }
};

// get teams standing
export const getTeamsStandings = async (
  league: string,
  season: string,
  conference: string
) => {
  try {
    const response = await axios.get(
      `${base_url}/standing/:${league}/:${season}/:${conference}`
    );
    return response;
  } catch (error) {
    console.error("[GET teams standing failed]: ", error);
  }
};

// get match info
export const getMatchInfo = async (id: number | string) => {
  try {
    const response = await axios.get(`${base_url}/game/:${id}`);
    return response;
  } catch (error) {
    console.error("[GET match info failed: ]", error);
  }
};

// get match stats
export const getMatchStats = async (id: string) => {
  try {
    const respose = await axios.get(`${base_url}/stats/:${id}`);
    return respose;
  } catch (error) {
    console.error("[GET match stats failed: ]", error);
  }
};
