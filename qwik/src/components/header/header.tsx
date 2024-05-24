import { component$ } from "@builder.io/qwik";
import QwikLogo from "../../media/icons/icon-72x72.png?jsx";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <QwikLogo />
      </div>
      <h1>KSP Community</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/upload">Upload</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </header>
  );
});
