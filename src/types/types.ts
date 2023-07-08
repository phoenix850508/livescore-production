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
