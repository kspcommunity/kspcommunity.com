/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class={styles.footer}>
        {/* Main Div */}
        <div class={styles.main}>
          {/* KSPC Column */}
          <div class={styles.column}>
            <h4>KSPC</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="https://github.com/kspcommunity/kspcommunity.com" target="_blank" rel="noopener">Open Source</a></li>
            </ul>
          </div>
          {/* Links Column */}
          <div class={styles.column}>
            <h4>Links</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookies">Cookies</a></li>
            </ul>
          </div>
          {/* Socials Column */}
          <div class={styles.column}>
            <h4>Socials</h4>
            <div class={styles.socials}>
              <a href="https://www.instagram.com/g9aerospace/" target="_blank" rel="noopener">
                <img src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" alt="Instagram" />
              </a>
              <a href="https://www.youtube.com/@G9AEROSPACEYT" target="_blank" rel="noopener">
                <img src="https://img.icons8.com/?size=256&id=19318&format=png" alt="Youtube" />
              </a>
              <a href="https://github.com/kspcommunity" target="_blank" rel="noopener">
                <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" />
              </a>
              <a href="https://discord.gg/jhju3spUbE" target="_blank" rel="noopener">
                <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" />
              </a>
            </div>
          </div>
        </div>
        {/* Footnote Div */}
        <div class={styles.footnote}>
          <p>Copyright &copy; 2024 KSP Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});
