import React from "react";

export type dateProps = {
  monthIndex: number;
  year: number;
  prevClick?: React.MouseEventHandler<HTMLImageElement>;
  nextClick?: React.MouseEventHandler<HTMLImageElement>;
};

export type locationProps = {
  locationIcon: string[];
  locationTitle: string[];
  leagueArr?: string[] | null;
  indexBottom?: boolean;
};

export type initDateState = {
  year?: number | undefined;
  monthIndex?: number | undefined;
  date?: number | undefined;
};

export type actionType = {
  type: "change_date";
  year?: number | undefined;
  monthIndex?: number | undefined;
  date?: number | undefined;
};

export type showFavorites = {
  showFavorites?: boolean;
};

export type showSportType = {
  showSport?: string;
};

export type allGamesProps = {
  nbaGames?: object[] | object;
  mlbGames?: object[] | object;
};

export type nbaMatchItemProps = {
  id?: number;
  scores?: {
    visitors?: {
      linescore?: number[];
    };
    home?: {
      linescore?: number[];
    };
  };
  teams?: {
    visitors?: {
      nickname?: string;
      id?: number;
    };
    home?: {
      nickname?: string;
      id?: number;
    };
  };
  date?: {
    start?: Date;
    end?: string | null;
  };
  periods?: {
    current?: number;
    total?: number;
  };
  status?: {
    halftime?: string;
    long?: string;
  };
};

export type mlbMatchItemProps = {
  away?: string;
  gameDate?: string;
  gameID?: string;
  gameTime?: string;
  home?: string;
  teamIDAway?: string;
  teamIDHome?: string;
};

export type mlbLiveMatchItemProps = {
  dummyMlbLiveGames: object;
};

export type initMatchType = {
  awayTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
    logo?: string | undefined;
  };
  homeTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
    logo?: string | undefined;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
  leagueType?: string | undefined;
  id?: number | string;
  matchHour?: string | undefined;
};

export type matchActionType = {
  type: "selectFeaturedMatch";
  awayTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
    logo?: string | undefined;
  };
  homeTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
    logo?: string | undefined;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
  leagueType?: string | undefined;
  id?: number | string;
  matchHour?: string | undefined;
};

export type handleSportType = {
  onBasketballClick?:
    | ((e: React.MouseEvent<HTMLImageElement>) => React.MouseEvent)
    | React.MouseEventHandler<HTMLImageElement>;
  onBaseballClick?:
    | ((e: React.MouseEvent<HTMLImageElement>) => React.MouseEvent)
    | React.MouseEventHandler<HTMLImageElement>;
  onFavoritesClick?: React.MouseEventHandler<HTMLDivElement>;
  onBrandClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type matchDataObjType = {
  currentInning?: string;
  lineScore?: {
    away?: {
      R?: number | undefined | null;
    };
    home?: {
      R?: number | undefined | null;
    };
  };
};

export type onFavoritesClick = {
  onFavoritesClick?: React.MouseEventHandler<HTMLDivElement>;
  onBrandClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type leagueParamsProps = {
  league?: string;
};

export type nbaTeamsStandingType = {
  standard?: {
    2022?: {
      east?: {
        response?: [] | object[];
      };
      west?: {
        response?: [] | object[];
      };
    };
    2021?: {
      east?: {
        response?: [] | object[];
      };
      west?: {
        response?: [] | object[];
      };
    };
  };
};

export type nbaTeamStandingType = {
  team?: {
    nickname?: string;
    id?: number;
    logo?: string;
  };
  conference?: {
    name?: string;
    rank?: number;
    win?: number;
    loss?: number;
  };
};

export type mlbTeamStandingType = {
  DIFF?: string;
  RA?: string;
  RS?: string;
  conference?: string;
  division?: string;
  loss?: string;
  mlbLogo1?: string;
  teamAbv?: string;
  teamCity?: string;
  teamID?: string;
  teamName?: string;
  wins?: string;
};

export type initSeason = {
  season: string;
};

export type seasonActionType = {
  type: "selectSeason";
  season: string;
};

export type matchInfoType = {
  id?: number | null;
  date?: {
    start?: string | null;
  };
  periods?: {
    current?: number;
    total?: number;
  };
  status?: {
    halftime?: string;
    long?: string;
  };
  scores?: {
    home?: {
      linescore?: number[];
    };
    visitors?: {
      linescore?: number[];
    };
  };
};

export type matchStatsType = {
  statistics?: [
    {
      assists?: number;
      blocks?: number;
      defReb?: number;
      offReb?: number;
      pFouls?: number;
      points?: number;
      steals?: number;
      turnovers?: number;
    }
  ];

  team?: {
    nickname?: string;
  };
};

export type matchInfoObj = {
  id?: string;
  league?: string;
  leagueType?: string;
  date?: string | null;
  awayTeam?: string;
  awayLogo?: string;
  awayScores?: number[] | undefined;
  awayTotal?: string | null | number;
  homeTeam?: string;
  homeLogo?: string;
  homeScores?: number[] | undefined;
  homeTotal?: string | null | number;
  periods?: string | number | undefined;
  status?: string;
  matchHour?: string | undefined;
};
