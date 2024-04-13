import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";
import ImgKSPC from "../../../media/kspcommunity.png";

export default component$(() => {

  return (
    <header class={`${styles.header}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          {/* Use the imported image */}
          <img src={ImgKSPC} alt="KSPC Logo" class={styles.logo} width="100" height="100" />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});