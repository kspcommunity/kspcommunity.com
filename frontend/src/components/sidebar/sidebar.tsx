/* eslint-disable qwik/jsx-a */
/* eslint-disable qwik/jsx-img */
import { component$, $ } from "@builder.io/qwik";
import styles from "./sidebar.module.css";
import kspcommunitylogo from "../../media/kspcommunity.png";
import hamburgerIcon from "../../media/icons/hamburger.svg";

export default component$(() => {
  const toggleSidebar = $(() => {
    const sidebar = document.querySelector(`.${styles.sidebar}`);
    if (sidebar) {
      sidebar.classList.toggle(styles.sidebarMinimized);
    }
  });

  return (
    <aside class={`${styles.sidebar} ${styles.sidebarOpen}`}>
      <div class={styles.hamburger} onClick$={toggleSidebar}>
        <img src={hamburgerIcon} alt="Hamburger" />
      </div>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={kspcommunitylogo} alt="KSP Community Icon" width="100" height="100" />
        </div>
        <a class={styles.title}>KSP Community</a>
        <hr class={styles.separator} />
        <div class={styles.sections}>
          {/* Sections */}
          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div class={styles.section}>
            <ul class={styles.navList}>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookies">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
});
