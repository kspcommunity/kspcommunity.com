import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";
import youtube from "../../../media/icons/youtube.svg";
import instagram from "../../../media/icons/instagram.svg";
import discord from "../../../media/icons/discord.svg";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      {/* Top Box */}
      <div class={styles.topBox}>
        {/* Column 1: Links */}
        <div class={styles.column}>
          <h3>Links</h3>
          <nav class={styles.footerNav}>
            <a href="/privacy-policy" target="blank">Privacy Policy</a>
            <a href="/terms-of-service" target="blank">Terms of Service</a>
            <a href="/cookies" target="blank">Cookies</a>
            <a href="/report">Report</a>
            <a href="/contributemod">Contribute Mod</a>
            <a href="/about">About Us</a>
            <a href="https://github.com/orgs/kspcommunity/discussions/2" target="blank">Dev Blog</a>
          </nav>
        </div>
        {/* Column 2: Resources */}
        <div class={styles.column}>
          <h3>Resources</h3>
          <nav class={styles.footerNav}>
            <a href="https://github.com/kspcommunity/Craft-File-Reader" target="blank">Craft File Reader</a>
            <a href="https://github.com/kspcommunity/Mod-Parts-Lister" target="blank">Mod Parts List</a>
            <a href="https://mod-parts.kspcommunity.com/data.json" target="_blank">Mod Parts Endpoint</a>
            <a href="https://github.com/kspcommunity/kspcommunity.com" target="blank">Open Source</a>
          </nav>
        </div>
        {/* Column 3: Social Media */}
        <div class={styles.column}>
          <h3>Social Media</h3>
          <div class={styles.footerSocialContainer}>
            <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Youtube Icon" class={styles.socials}/>
            </a>
            <a href="https://www.instagram.com/g9aerospace/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram Icon" class={styles.socials}/>
            </a>
            <a href="https://discord.gg/gfzDMS7tQD" target="_blank" rel="noopener noreferrer">
              <img src={discord} alt="Discord Icon" class={styles.socials}/>
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Box */}
      <div class={styles.bottomBox}>
        {/* Row 1: Copyright */}
        <div class={styles.row}>
          <p class={styles.footerCopyright}>&copy; 2024 kspcommunity.com. All rights reserved. SITE IS IN DEVELOPMENT PHASE: PAGES MAY BUG, DATA LOST, ETC. USE AT YOUR OWN DISCRETION</p>
        </div>
        {/* Row 2: Disclaimer */}
        <div class={styles.row}>
          <p class={styles.footerDisclaimer}>A fan-made website. Not affiliated with Intercept Games</p>
        </div>
      </div>
    </footer>
  );
});
