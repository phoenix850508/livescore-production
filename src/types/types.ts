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

export type calendarDate = {
  selectedDateObj: {
    selectedYear: number;
    selectedMonthIndex: number;
    selectedDate: number;
  };
};

export type dateState = {
  yearNew: number;
  monthIndexNew: number;
  dateNew: number;
};

export type actionType = {
  type: "change_year" | "change_monthIndex" | "change_date";
};
