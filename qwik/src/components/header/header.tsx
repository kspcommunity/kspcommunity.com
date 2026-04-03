import { component$ } from "@builder.io/qwik";
import QwikLogo from "../../media/icons/icon-72x72.png?jsx";
import Auth from "./auth";
import { BsHouse, BsPencilSquare, BsGear } from "@qwikest/icons/bootstrap";
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
          <a href="/"><BsHouse/> Home</a>
        </li>
        <li>
          <a href="/create"><BsPencilSquare/> Create</a>
        </li>
        <li>
          <a href="/settings"><BsGear/> Settings</a>
        </li>
        <Auth/>
      </ul>
    </header>
  );
});
