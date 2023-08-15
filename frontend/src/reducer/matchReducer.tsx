import { initMatchType, matchActionType } from "types/types";

export default function dateReducer(
  match: initMatchType,
  action: matchActionType
) {
  switch (action.type) {
    case "selectFeaturedMatch": {
      return {
        ...match,
        awayTeam: {
          nickname: action?.awayTeam?.nickname,
          id: action?.awayTeam?.id,
          logo: action?.awayTeam?.logo,
        },
        homeTeam: {
          nickname: action?.homeTeam?.nickname,
          id: action?.homeTeam?.id,
          logo: action?.homeTeam?.logo,
        },
        scores: {
          awayTotal: action?.scores?.awayTotal,
          homeTotal: action?.scores?.homeTotal,
        },
        leagueType: action?.leagueType,
        id: action?.id,
        matchHour: action?.matchHour,
      };
    }
  }
}
