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
        },
        homeTeam: {
          nickname: action?.homeTeam?.nickname,
          id: action?.homeTeam?.id,
        },
        scores: {
          awayTotal: action?.scores?.awayTotal,
          homeTotal: action?.scores?.homeTotal,
        },
        sportType: action?.sportType,
      };
    }
  }
}
