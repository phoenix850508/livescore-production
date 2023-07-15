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
  year: number | undefined;
  monthIndex: number | undefined;
  date: number | undefined;
};

export type actionType = {
  type: "change_date";
  year?: number;
  monthIndex?: number;
  date?: number;
};
