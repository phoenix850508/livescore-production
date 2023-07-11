import LeftSection from "./leftSection/LeftSection";
import MiddleSection from "./middleSection/MiddleSection";
import RightSection from "./rightSection/RightSection";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
}
