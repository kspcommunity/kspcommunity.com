/* eslint-disable qwik/jsx-a */
import { component$ } from "@builder.io/qwik";
import styles from "./secondary-footer.module.css";
import { Link } from "@builder.io/qwik-city";
import { LuPlane, LuFolderKanban, LuLayers } from "@qwikest/icons/lucide";
import Socials from "../socials/socials";

export default component$(() => {

  return (
    <div class={styles.secondaryFooter}>
      {/*KSP-C Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
        <LuPlane /> KSP-C
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <Link
              href="/about"
              >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/terms-of-service"
              >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/feedback"
              >
              Feedback
            </Link>
          </li>
          <li>
            <Link href="mailto:info@kspcommunity.com">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      {/*Products Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuFolderKanban /> Products
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <Link
              href="https://github.com/kspcommunity/Craft-File-Reader"
              target="_blank"
              >
              Craft File Reader
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kspcommunity/Mod-Parts-Lister"
              target="_blank"
              >
              Mod Parts Lister
            </Link>
          </li>
        </ul>
      </div>

      {/*Resources Section */}
      <div class={styles.column}>
        <a class={styles.columnheading}>
          <LuLayers /> Resources
        </a>
        <ul class={styles.columnlinks}>
          <li>
            <Link
              href="https://status.kspcommunity.com"
              target="_blank"
              >
              Status page
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kspcommunity/kspcommunity.com"
              target="_blank"
              >
              Open Source
            </Link>
          </li>
        </ul>
      </div>

      <div class={styles.column}>
        <Socials />
      </div>

    </div>
  );
});
