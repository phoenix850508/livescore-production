import bucks from "icons/nbaEastTeams/milwaukee-bucks.svg";
import styles from "./Standings.module.scss";

export default function Standings() {
  return (
    <div className={styles.standings}>
      <div className={styles.title}>Standings</div>
      <div className={styles.buttonGroup}>
        <button>East</button>
        <button>West</button>
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
            <tr>
              <td className={styles.teamId}>1</td>
              <td>
                <div className={styles.teamName}>
                  <span>Bucks</span>
                  <img
                    className={styles.teamLogo}
                    src={bucks}
                    alt="bucks.svg"
                  />
                </div>
              </td>
              <td>
                <div className={styles.emptyGap}></div>
              </td>
              <td>2</td>
              <td>2-0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className={styles.teamId}>2</td>
              <td>
                <div className={styles.teamName}>
                  <span>Bucks</span>
                  <img
                    className={styles.teamLogo}
                    src={bucks}
                    alt="bucks.svg"
                  />
                </div>
              </td>
              <td>
                <div className={styles.emptyGap}></div>
              </td>
              <td>2</td>
              <td>2-0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className={styles.teamId}>2</td>
              <td>
                <div className={styles.teamName}>
                  <span>Bucks</span>
                  <img
                    className={styles.teamLogo}
                    src={bucks}
                    alt="bucks.svg"
                  />
                </div>
              </td>
              <td>
                <div className={styles.emptyGap}></div>
              </td>
              <td>2</td>
              <td>2-0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className={styles.teamId}>2</td>
              <td>
                <div className={styles.teamName}>
                  <span>Bucks</span>
                  <img
                    className={styles.teamLogo}
                    src={bucks}
                    alt="bucks.svg"
                  />
                </div>
              </td>
              <td>
                <div className={styles.emptyGap}></div>
              </td>
              <td>2</td>
              <td>2-0</td>
              <td>1</td>
            </tr>
            <tr>
              <td className={styles.teamId}>2</td>
              <td>
                <div className={styles.teamName}>
                  <span>Bucks</span>
                  <img
                    className={styles.teamLogo}
                    src={bucks}
                    alt="bucks.svg"
                  />
                </div>
              </td>
              <td>
                <div className={styles.emptyGap}></div>
              </td>
              <td>2</td>
              <td>2-0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
