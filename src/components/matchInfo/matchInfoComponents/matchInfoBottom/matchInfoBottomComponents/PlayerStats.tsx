import styles from "./PlayerStats.module.scss";

export default function PlayerStats() {
  return (
    <div className={styles.playerStats}>
      <div className={styles.title}>Player Stats</div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Nuggets</th>
              <th>PTS</th>
              <th>REB</th>
              <th>AST</th>
              <th>FG%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nikola Jokic</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Michael Porter Jr.</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Jamal Murray</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Kentavious Caldwell-Pope</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Bruce Brown</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Heat</th>
              <th>PTS</th>
              <th>REB</th>
              <th>AST</th>
              <th>FG%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jimmy Butler</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Bam Adebayo</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Kyle Lowry</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Max Strus</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Caleb Martin</td>
              <td>30</td>
              <td>10</td>
              <td>10</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
