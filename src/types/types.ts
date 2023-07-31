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
  onFavoritesClick?: React.MouseEventHandler<HTMLDivElement | HTMLLIElement>;
  onBrandClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type onCalendarClick = {
  onCalendarClick?: React.MouseEventHandler<HTMLDivElement>;
  showCalendar?: boolean;
  calendarRef?: React.LegacyRef<HTMLDivElement>;
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

export type nbaMatchInfoType = {
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

export type mlbMatchInfoType = {
  gameDate: string;
  Umpires?: string;
  Venue?: string;
  away?: string;
  currentInning?: string;
  currentOuts?: string;
  gameID?: string;
  gameStatus?: string;
  home?: string;
  lineScore?: {
    away?: {
      E?: string;
      H?: string;
      R?: string;
      scoresByInning: {
        1?: string;
        2?: string;
        3?: string;
        4?: string;
        5?: string;
        6?: string;
        7?: string;
        8?: string;
        9?: string;
        10?: string;
        11?: string;
        12?: string;
      };
    };
    home?: {
      E?: string;
      H?: string;
      R?: string;
      scoresByInning?: {
        1?: string;
        2?: string;
        3?: string;
        4?: string;
        5?: string;
        6?: string;
        7?: string;
        8?: string;
        9?: string;
        10?: string;
        11?: string;
        12?: string;
      };
    };
  };
  teamStats?: {
    away?: {
      BaseRunning?: {
        CS?: string;
        PO?: string;
        SB?: string;
      };
      Hitting?: {
        "2B"?: string;
        "3B"?: string;
        BB?: string;
        TB?: string;
      };
      Pitching?: {
        "Batters Faced": string;
        Flyouts?: string;
        Groundouts?: string;
        Pitches?: string;
        Strikes?: string;
        "Wild Pitch"?: string;
      };
    };
    home?: {
      BaseRunning?: {
        CS?: string;
        PO?: string;
        SB?: string;
      };
      Hitting?: {
        "2B"?: string;
        "3B"?: string;
        BB?: string;
        TB?: string;
      };
      Pitching?: {
        "Batters Faced": string;
        Flyouts?: string;
        Groundouts?: string;
        Pitches?: string;
        Strikes?: string;
        "Wild Pitch"?: string;
      };
    };
  };
};

export type mlbteamStatsType = {
  BaseRunning?: {
    CS?: string | null;
    PO?: string | null;
    SB?: string | null;
  } | null;
  Hitting?: {
    "2B"?: string | null;
    "3B"?: string | null;
    BB?: string | null;
    TB?: string | null;
    R?: string | null;
    H?: string | null;
  } | null;
  Pitching?: {
    "Batters Faced": string | null;
    Flyouts?: string | null;
    Groundouts?: string | null;
    Pitches?: string | null;
    Strikes?: string | null;
    "Wild Pitch"?: string | null;
  } | null;
};

export type nbaMatchStatsObjectType = {
  homeStats?: {
    statistics?: [
      {
        assists?: number | null;
        blocks?: number | null;
        defReb?: number | null;
        offReb?: number | null;
        pFouls?: number | null;
        points?: number | null;
        steals?: number | null;
        turnovers?: number | null;
        fgm?: number | null;
        fga?: number | null;
        tpm?: number | null;
        tpa?: number | null;
        totReb?: number | null;
      }
    ];

    team?: {
      nickname?: string;
    };
  } | null;
  awayStats?: {
    statistics?: [
      {
        assists?: number | null;
        blocks?: number | null;
        defReb?: number | null;
        offReb?: number | null;
        pFouls?: number | null;
        points?: number | null;
        steals?: number | null;
        turnovers?: number | null;
        fgm?: number | null;
        fga?: number | null;
        tpm?: number | null;
        tpa?: number | null;
        totReb?: number | null;
      }
    ];

    team?: {
      nickname?: string;
    };
  } | null;
  leagueType?: string | null;
};

export type matchStatsType = {
  statistics?: [
    {
      assists?: number | null;
      blocks?: number | null;
      defReb?: number | null;
      offReb?: number | null;
      pFouls?: number | null;
      points?: number | null;
      steals?: number | null;
      turnovers?: number | null;
      fgm?: number | null;
      fga?: number | null;
      tpm?: number | null;
      tpa?: number | null;
      totReb?: number | null;
    }
  ];
  Pitching?: {};
  Hitting?: {};
  BaseRunning?: {};
};

export type matchInfoObj = {
  id?: string | null;
  league?: string | null;
  leagueType?: string | null;
  date?: string | null | null;
  awayTeam?: string | null;
  awayLogo?: string;
  awayScores?: number[] | string[] | undefined | null;
  awayTotal?: string | null | number | null;
  homeTeam?: string | null;
  homeLogo?: string;
  homeScores?: number[] | string[] | undefined | null;
  homeTotal?: string | null | number;
  periods?: string | number | undefined | null;
  status?: string | null;
  matchHour?: string | undefined | null;
};

export type currentPage = {
  currentPage: number | null;
};

export type onMobileIcon = {
  onLeagueCupClick?: React.MouseEventHandler<HTMLLIElement | HTMLDivElement>;
  onMatchesClick?: React.MouseEventHandler<HTMLLIElement>;
  showMobileIcon?: string | null;
};

export type middleSecRef = {
  middleSecRef?: React.LegacyRef<HTMLDivElement>;
};

export type mobileStatsProps = {
  activeMenu?: "details" | "statistics";
  onDetailsClick?: React.MouseEventHandler<HTMLDivElement>;
  onStatisticsClick?: React.MouseEventHandler<HTMLDivElement>;
};
