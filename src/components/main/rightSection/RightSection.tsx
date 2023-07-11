import FeaturedMatch from "./rightSectionComponents/FeaturedMatch";
import styles from "./RightSection.module.scss";

export default function RightSection() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.featuredMatch}>
        <h3 className={styles.title}>Featured Match</h3>
        <FeaturedMatch />
      </div>
    </div>
  );
}
