import { component$ } from "@builder.io/qwik";
import styles from "./socials.module.css";
import Discord from "../../media/icons/discord.svg?jsx";
import Instagram from "../../media/icons/instagram.svg?jsx";
import Youtube from "../../media/icons/youtube.svg?jsx";

export default component$(() => {
  return (
    <div class={styles.socialIcons}>
      <a href="https://discord.gg/X547TVKMqF" class={styles.iconLink} title="Join us on Discord!">
        <Discord class={styles.icon} />
      </a>

      <a href="https://www.instagram.com/g9aerospace/" class={styles.iconLink} title="Follow us on Instagram!">
        <Instagram class={styles.icon} />
      </a>

      <a href="https://www.youtube.com/@G9AEROSPACEYT" class={styles.iconLink} title="Subscribe to us on youtube!">
        <Youtube class={styles.icon} />
      </a>
    </div>
  );
});
