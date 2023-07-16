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
  mlbGames?: object[];
};

export type matchItemProps = {
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
    awayTotal?: number;
    homeTotal?: number | undefined;
  };
};

export type matchActionType = {
  type: "selectFeaturedMatch";
  awayTeam: {
    nickname: string | undefined;
    id: number | undefined;
  };
  homeTeam: {
    nickname: string | undefined;
    id: number | undefined;
  };
  scores: {
    awayTotal: number | undefined;
    homeTotal: number | undefined;
  };
};
