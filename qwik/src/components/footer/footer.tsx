import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class="container">
        <a class={styles.anchor}>
          <span>&copy; kspcommunity.com 2024</span>
        </a>
        <a class={styles.disclaimer}>
          KSP Community and its projects are not affiliate with Interactive Games, the KSP Game, Curseforge or Spacedock
        </a>
      </div>
    </footer>
  );
});
