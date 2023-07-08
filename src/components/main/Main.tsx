import LeftSection from "./leftSection/LeftSection";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <LeftSection />
      <div></div>
      <div></div>
    </div>
  );
}
