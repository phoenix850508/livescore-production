import styles from "./TeamInfoMiddle.module.scss";

export default function TeamInfoMiddle() {
  return (
    <div className={styles.teamInfoMiddle}>
      <div className={styles.infoTitle}>Team Info</div>
      <div className={styles.teamDetailWrapper}>
        <div className={styles.coach}>Coach: Michael Malone</div>
        <div className={styles.playerCount}>Total player: 15</div>
        <div className={styles.stadium}>Stadium: Ball Arena</div>
        <div className={styles.city}>City: Denver, USA</div>
      </div>
    </div>
  );
}
