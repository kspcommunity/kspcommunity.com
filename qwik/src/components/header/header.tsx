import { component$ } from "@builder.io/qwik";
import QwikLogo from "../../media/icons/icon-72x72.png?jsx";
import { Link } from "@builder.io/qwik-city";
import { LuHome, LuFilePlus2, LuSettings } from "@qwikest/icons/lucide";
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
          <Link href="/"><LuHome/> Home</Link>
        </li>
        <li>
          <Link href="/create"><LuFilePlus2/> Create</Link>
        </li>
        <li>
          <Link href="/settings"><LuSettings/> Settings</Link>
        </li>
      </ul>
    </header>
  );
});
