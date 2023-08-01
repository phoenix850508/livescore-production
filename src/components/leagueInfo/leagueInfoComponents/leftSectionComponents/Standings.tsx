import { getTeamsStandings } from "api/nba";
import { useState, useEffect, useContext } from "react";
import { SeasonContext } from "context/SeasonContext";
import {
  nbaTeamsStandingType,
  nbaTeamStandingType,
  leagueParamsProps,
  mlbTeamStandingType,
} from "types/types";
import clsx from "clsx";
import { dummyMlbStandings } from "./dummyMlbStandings";
import styles from "./Standings.module.scss";

export default function Standings(props: leagueParamsProps) {
  const [conference, setConference] = useState<string>("");
  const { season } = useContext(SeasonContext);
  const seasonString = season.season;
  const [nbaStandingData, nbaSetStandingData] =
    useState<null | nbaTeamsStandingType>(null);
  const [mlbStandingData, setMlbStandingData] = useState<object[] | null>(null);
  const defaultLogo = "https://www.svgrepo.com/show/133513/shield.svg";
  // temporarily define each layer of object the way below(dummy data only), as cannot find a better way
  const standardObj =
    props.league === "nba" && nbaStandingData && nbaStandingData?.standard;
  const teamsEast =
    seasonString === "2022"
      ? standardObj && standardObj?.[2022]?.east?.response
      : standardObj && standardObj?.[2021]?.east?.response;
  const teamsWest =
    seasonString === "2022"
      ? standardObj && standardObj?.[2022]?.west?.response
      : standardObj && standardObj?.[2021]?.west?.response;
  const teams = conference === "east" ? teamsEast : teamsWest;

  //sort nab teams by their ranks
  const reOrdered = teams && new Array<object>(teams?.length);
  if (teams && reOrdered) {
    teams.map((team: nbaTeamStandingType, index: number) => {
      const rank: number | undefined = team.conference?.rank;
      return rank && reOrdered?.splice(rank - 1, 1, team);
    });
  }

  // mlb section

  // sort mlb data into AL and NL
  const alArr: mlbTeamStandingType[] = [];
  const nlArr: mlbTeamStandingType[] = [];
  mlbStandingData?.map((team: mlbTeamStandingType, index: number) => {
    if (team?.conference === "National League") {
      nlArr.push(team);
    } else {
      alArr.push(team);
    }
  });

  nlArr.sort((a, b) => {
    if (a.wins !== b.wins) return Number(b.wins) - Number(a.wins);
    else return Number(a.loss) - Number(b.loss);
  });

  alArr.sort((a, b) => {
    if (a.wins !== b.wins) return Number(b.wins) - Number(a.wins);
    else return Number(a.loss) - Number(b.loss);
  });

  // get nba
  useEffect(() => {
    const asyncGetTeamsStandings = async () => {
      const response = await getTeamsStandings(
        "standard",
        seasonString,
        conference
      );
      response && nbaSetStandingData(Object.values(response)[0]);
    };
    if (props.league === "nba") {
      setConference("east");
      asyncGetTeamsStandings();
    }
  }, [seasonString, props.league]);

  // get mlb
  useEffect(() => {
    if (props.league === "mlb") {
      setConference("American League");
      setMlbStandingData(dummyMlbStandings);
    }
  }, [props.league]);

  return (
    <div className={styles.standings}>
      <div className={styles.title}>Standings</div>
      <div className={styles.buttonGroup}>
        {props.league === "nba" && (
          <>
          <div className={styles.buttonWrapper} onClick={() => setConference("east")}>
            <button
              className={clsx({ [styles.selected]: conference === "east" })}>
              EAST
            </button>
            <div className={clsx({[styles.underline]: conference === "east" })}></div>
          </div>
          <div className={styles.buttonWrapper} onClick={() => setConference("west")}>
            <button
              className={clsx({ [styles.selected]: conference === "west" })}>
              WEST
            </button>
            <div className={clsx({[styles.underline]: conference === "west"})}></div>
          </div>
          </>
        )}
        {props.league === "mlb" && (
          <>
          <div className={styles.buttonWrapper} onClick={() => setConference("American League")}>
            <button
              className={clsx({
                [styles.selected]: conference === "American League",
              })}>
              American League
            </button>
            <div className={clsx({[styles.underline]: conference === "American League"})}></div>
          </div>
          <div className={styles.buttonWrapper} onClick={() => setConference("National League")}>
            <button
              className={clsx({
                [styles.selected]: conference === "National League",
              })}>
              National League
            </button>
            <div className={clsx({[styles.underline]: conference === "National League"})}></div>
          </div>
          </>
        )}
      </div>
      <div className={styles.standingsWrapper}>
        <table>
          <thead>
            <tr>
              <th className={styles.teamId}>#</th>
              <th>
                <div className={styles.teamName}>Team</div>
              </th>
              <th>
                <div className={styles.emptyGap}></div>
              </th>
              <th>P</th>
              <th>W-L</th>
              <th>PCT</th>
            </tr>
          </thead>
          <tbody>
            {props.league === "nba" &&
              reOrdered &&
              reOrdered.map((team: nbaTeamStandingType, index: number) => {
                const conferenceObj = team?.conference;
                const wins = conferenceObj?.win;
                const losses = conferenceObj?.loss;
                const totalPlayed = wins && losses && wins + losses;
                return (
                  <tr key={index}>
                    <td className={styles.teamRank}>{conferenceObj?.rank}</td>
                    <td>
                      <div className={styles.teamName}>
                        <img
                          className={styles.teamLogo}
                          src={
                            team?.team?.logo ? team?.team?.logo : defaultLogo
                          }
                          alt="teamLogo.png"
                        />
                        <span>{team?.team?.nickname}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.emptyGap}></div>
                    </td>
                    <td>{totalPlayed}</td>
                    <td>{`${wins}-${losses}`}</td>
                    <td>{wins && losses && (wins / losses).toFixed(3)}</td>
                  </tr>
                );
              })}
            {props.league === "mlb" &&
              conference === "National League" &&
              nlArr &&
              nlArr.map((team: mlbTeamStandingType, index: number) => {
                const wins = Number(team.wins);
                const losses = Number(team.loss);
                const totalPlayed = wins && losses && wins + losses;
                return (
                  <tr key={index}>
                    <td className={styles.teamRank}>{index + 1}</td>
                    <td>
                      <div className={styles.teamName}>
                        <img
                          className={styles.teamLogo}
                          src={team.mlbLogo1 ? team.mlbLogo1 : defaultLogo}
                          alt="teamLogo.png"
                        />
                        <span>{team.teamName}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.emptyGap}></div>
                    </td>
                    <td>{totalPlayed}</td>
                    <td>{`${wins}-${losses}`}</td>
                    <td>{wins && losses && (wins / losses).toFixed(3)}</td>
                  </tr>
                );
              })}
            {props.league === "mlb" &&
              conference === "American League" &&
              alArr &&
              alArr.map((team: mlbTeamStandingType, index: number) => {
                const wins = Number(team.wins);
                const losses = Number(team.loss);
                const totalPlayed = wins && losses && wins + losses;
                return (
                  <tr key={index}>
                    <td className={styles.teamRank}>{index + 1}</td>
                    <td>
                      <div className={styles.teamName}>
                        <img
                          className={styles.teamLogo}
                          src={team.mlbLogo1 ? team.mlbLogo1 : defaultLogo}
                          alt="teamLogo.png"
                        />
                        <span>{team.teamName}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.emptyGap}></div>
                    </td>
                    <td>{totalPlayed}</td>
                    <td>{`${wins}-${losses}`}</td>
                    <td>{wins && losses && (wins / losses).toFixed(3)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
