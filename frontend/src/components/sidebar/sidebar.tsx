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
          {/* Other Sections */}
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
      
      {/* Social Media Icons and GitHub Sponsor Button */}
      <div class={styles.socialContainer}>
        <div class={styles.socialIcons}>
          <a href="https://www.instagram.com/g9aerospace/" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=19318&format=png" alt="Youtube" />
          </a>
          <a href="https://github.com/kspcommunity" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" />
          </a>
          <a href="https://discord.gg/gfzDMS7tQD" target="_blank" rel="noopener">
            <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" />
          </a>
        </div>
      </div>
    </aside>
  );
});
