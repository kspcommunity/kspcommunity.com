import { component$ } from "@builder.io/qwik";
import styles from "./secondary-footer.module.css";

export default component$(() => {

  return (
    <div class={styles.secondaryFooter}>
      {/*KSP-C Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          KSP-C
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="/about"
              >
              About us
            </a>
          </li>
          <li>
            <a
              href="/terms-of-service"
              >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="mailto:info@kspcommunity.com">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      {/*Products Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          Products
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="https://github.com/kspcommunity/Craft-File-Reader"
              >
              Craft File Reader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kspcommunity/Mod-Parts-Lister"
              >
              Mod Parts Lister
            </a>
          </li>
        </ul>
      </div>

      {/*Resources Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          Resources
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <a
              href="https://status.kspcommunity.com"
              >
              Status page
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kspcommunity/kspcommunity.com"
              >
              Open Source
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
});
