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

export type allGamesProps = {
  nbaGames?: object[] | object;
  mlbGames?: object[] | object;
  showSport?: string;
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
  dummtMlbLiveGames: object;
};

export type initMatchType = {
  awayTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
  };
  homeTeam?: {
    nickname?: string | undefined;
    id?: number | undefined;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
};

export type matchActionType = {
  type: "selectFeaturedMatch";
  awayTeam?: {
    nickname: string | undefined;
    id: number | undefined;
  };
  homeTeam?: {
    nickname: string | undefined;
    id: number | undefined;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
};

export type showSportType = {
  showSport?: string;
};

export type handleSportType = {
  showSport?: string;
  onBasketballClick?:
    | ((e: React.MouseEvent<HTMLImageElement>) => React.MouseEvent)
    | React.MouseEventHandler<HTMLImageElement>;
  onBaseballClick?:
    | ((e: React.MouseEvent<HTMLImageElement>) => React.MouseEvent)
    | React.MouseEventHandler<HTMLImageElement>;
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
