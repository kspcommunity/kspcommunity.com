import { component$ } from "@builder.io/qwik";
import styles from "./socials.module.css";
import { LuYoutube, LuInstagram, LuGamepad2 } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class={styles.socialIcons}>
      <a href="https://discord.gg/X547TVKMqF" class={styles.iconLink} title="Join us on Discord!" target="_blank">
        <LuGamepad2 class={styles.icon} />
      </a>

      <a href="https://www.instagram.com/g9aerospace/" class={styles.iconLink} title="Follow us on Instagram!" target="_blank">
        <LuInstagram class={styles.icon} />
      </a>

      <a href="https://www.youtube.com/@G9AEROSPACEYT" class={styles.iconLink} title="Subscribe to us on youtube!" target="_blank">
        <LuYoutube class={styles.icon} />
      </a>
    </div>
  );
});
