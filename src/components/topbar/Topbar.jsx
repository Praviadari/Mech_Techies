import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={`${styles.topbarContainer} sticky top-0`}>
      <div className={styles.topbarLeft}>
        <span className={`${styles.logo} font-bold`}>
          Royal Mech Techies
        </span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={`${styles.searchbar} rounded-3xl`}>
          <Search className={`${styles.searchIcon} text-xl ml-2.5`} />
          <input
            type="text"
            placeholder="Search For Materials"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={`${styles.topbarRight} text-white`}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>Homepage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Chat />
            <span className={styles.topbarIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Notifications />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
        </div>
        <img src="/src/assets/logo.jpg" alt="" className={styles.topbarImg} />
      </div>
    </div>
  );
}
