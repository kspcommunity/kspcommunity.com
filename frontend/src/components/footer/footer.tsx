/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {

  return (
    <footer>
      <div class={styles.footer}>
        <a rel="noopener" class={styles.anchor}><span>KSP Community 2024</span></a>
      </div>
    </footer>
  );
});
