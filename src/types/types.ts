import React from "react";

export type dateProps = {
  monthIndex: number;
  year: number;
  prevClick?: React.MouseEventHandler<HTMLImageElement>;
  nextClick?: React.MouseEventHandler<HTMLImageElement>;
  onDateClick?: (
    date: number | string
  ) => React.MouseEventHandler<HTMLLIElement> | void;
  activeDate?: string | number | null;
  activeMonth?: string | number | null;
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
  teamNickname?: string | null;
  teamFullName?: string | null;
  id?: number;
  scores?: {
    visitors?: {
      linescore?: number[];
      points?: number;
    };
    home?: {
      linescore?: number[];
      points?: number;
    };
  };
  teams?: {
    visitors?: {
      name?: string;
      nickname?: string;
      id?: number;
      logo?: string;
    };
    home?: {
      name?: string;
      nickname?: string;
      id?: number;
      logo?: string;
    };
  };
  date?: {
    start?: Date | string;
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
  arena?: {
    name?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  // from here combines mlbMatchItemProps
  away?: string;
  gameDate?: string;
  gameID?: string;
  gameTime?: string;
  home?: string;
  teamIDAway?: string;
  teamIDHome?: string;
  lineScore?: {
    away?: {
      R?: string;
    };
    home?: {
      R?: string;
    };
  };
  gameStatus?: string;
  league?: string;
};

export type arena = {
  name?: string;
  city?: string;
  state?: string;
  country?: string;
};

export type nbaMatchItemArray = {
  matches?: nbaMatchItemProps[] | mlbMatchItemProps[] | null;
  season?: string;
  league?: string;
};

export type mlbMatchItemProps = {
  away?: string;
  gameDate?: string;
  gameID?: string;
  gameTime?: string;
  home?: string;
  teamIDAway?: string;
  teamIDHome?: string;
  lineScore?: {
    away?: {
      R?: string;
    };
    home?: {
      R?: string;
    };
  };
  gameStatus?: string;
  // from here combines nbaMatchItemProps
  teamFullName?: string | null;
  teamNickname?: string | null;
  id?: number;
  scores?: {
    visitors?: {
      linescore?: number[];
      points?: number;
    };
    home?: {
      linescore?: number[];
      points?: number;
    };
  };
  teams?: {
    visitors?: {
      name?: string;
      nickname?: string;
      id?: number;
      logo?: string;
    };
    home?: {
      name?: string;
      nickname?: string;
      id?: number;
      logo?: string;
    };
  };
  date?: {
    start?: Date | string;
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
  arena?: {
    name?: string;
    city?: string;
    state?: string;
    country?: string;
  };
};

export type mlbMatchItem = {
  schedule?: mlbMatchItemProps[] | null;
  team?: string;
};

export type mlbLiveMatchItemProps = {
  dummyMlbLiveGames: object;
};

export type initMatchType = {
  awayTeam?: {
    nickname?: string | undefined | null;
    id?: number | undefined | null;
    logo?: string | undefined | null;
  };
  homeTeam?: {
    nickname?: string | undefined | null;
    id?: number | undefined | null;
    logo?: string | undefined | null;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
  leagueType?: string | undefined | null;
  id?: number | string | null;
  matchHour?: string | undefined | null;
};

export type matchActionType = {
  type: "selectFeaturedMatch";
  awayTeam?: {
    nickname?: string | undefined | null;
    id?: number | undefined | null;
    logo?: string | undefined | null;
  };
  homeTeam?: {
    nickname?: string | undefined | null;
    id?: number | undefined | null;
    logo?: string | undefined | null;
  };
  scores?: {
    awayTotal?: number | string | undefined | null;
    homeTotal?: number | string | undefined | null;
  };
  leagueType?: string | undefined | null;
  id?: number | string | null;
  matchHour?: string | undefined | null;
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
  awayId?: number | string | null;
  awayTeam?: string | null;
  awayLogo?: string | null;
  awayScores?: number[] | string[] | undefined | null;
  awayTotal?: string | null | number | null;
  homeId?: number | string | null;
  homeTeam?: string | null;
  homeLogo?: string | null;
  homeScores?: number[] | string[] | undefined | null;
  homeTotal?: string | null | number;
  periods?: string | number | undefined | null;
  status?: string | null;
  matchHour?: string | undefined | null;
  teamFullName?: string | null;
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

export type teamInfoType = {
  teamFullName?: string | null;
  teamNickname?: string | null;
  arena?: string;
  city?: string;
  state?: string;
  teamID?: string;
  teamCity?: string;
  DIFF?: string;
  conference?: string;
  league?: string;
  teamLogo?: string;
};

export type mobileTeamProps = {
  onDetailsClick?: React.MouseEventHandler<HTMLDivElement>;
  onMatchesClick?: React.MouseEventHandler<HTMLDivElement>;
  activeMenu?: string;
};

export type onInputChange = {
  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputValue?: string | number | readonly string[] | undefined;
  checked?: boolean;
  onChekcboxChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type allTeams = {
  id?: number;
  response?: {
    logo?: string;
    name?: string;
    nickname?: string;
  };
  mlbLogo1?: string;
  teamAbv?: string;
  teamCity?: string;
  teamID?: string;
  teamName?: string;
};
