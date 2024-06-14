/* eslint-disable qwik/jsx-a */
import { component$, useStore } from "@builder.io/qwik";
import styles from "./footer.module.css";
import packageJson from '../../../../package.json';

export const Footer = component$(() => {
  const store = useStore({ version: packageJson.version });

  return (
    <footer class={styles.footer}>
      <a class={styles.anchor}>
        <span>&copy; kspcommunity.com {new Date().getFullYear()}</span>
      </a>
      <p class={styles.version}>v{store.version}</p>
      <p class={styles.disclaimer}>
        KSP Community and its projects are not affiliated with Interactive Games, the KSP Game, CurseForge, or SpaceDock.
      </p>
    </footer>
  );
});

export default Footer;
