import { initSeason, seasonActionType } from "types/types";

export default function seasonReducer(
  season: initSeason,
  action: seasonActionType
) {
  switch (action.type) {
    case "selectSeason": {
      return {
        season: action.season,
      };
    }
  }
}
