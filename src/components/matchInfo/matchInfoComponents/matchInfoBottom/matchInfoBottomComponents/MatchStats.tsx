import styles from "./MatchStats.module.scss";

export default function MatchStats() {
  return (
    <div className={styles.matchStats}>
      <div className={styles.title}>Match Stats</div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>1Q</th>
              <th>2Q</th>
              <th>3Q</th>
              <th>4Q</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24</td>
              <td>26</td>
              <td>26</td>
              <td>0</td>
            </tr>
            <tr>
              <td>19</td>
              <td>27</td>
              <td>20</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.timeline}>
        <div className={styles.timelineBody}>
          <div className={styles.rectangle}>
            <div className={styles.halftime}></div>
            <div className={styles.timelineBar}></div>
            <div className={styles.timeLayer}></div>
          </div>
        </div>
        <div className={styles.timecodeWrapper}>
          <div className={styles.startTime}>13:30</div>
          {/* only nba uses halftime, mlb will use innings to view the timeline */}
          <div className={styles.halftime}>HT</div>
          <div className={styles.fulltime}>FT</div>
        </div>
      </div>
      <div className={styles.arena}>
        <h3 className={styles.arenaTitle}>Arena</h3>
        <div className={styles.areanaName}>Name: Ball Arena</div>
        <div className={styles.areanaCity}>City: Denver</div>
        <div className={styles.areanaState}>State: CO</div>
      </div>
      <div className={styles.officials}>
        <h3 className={styles.officialsTitle}>Officials</h3>
        <div className={styles.officialsName}>Tom Washington</div>
        <div className={styles.officialsName}>Bill Kennedy</div>
        <div className={styles.officialsName}>Marat Kogut</div>
      </div>
    </div>
  );
}
