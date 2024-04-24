import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./privacy-policy.module.css";

export default component$(() => {
  return (
    <>
      <div id="privacy-policy" class={`${styles.container} ${styles.containerCenter}`}>
        <h1>
          Privacy Policy
        </h1>
        <p>
          Welcome to the Privacy Policy of G9 Aerospace. This page informs you of my policies regarding the collection, use, and disclosure of personal data when you use my Service and the choices you have associated with that data. I use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>
        <h4 class={styles.sectionTitle}>Information Collection and Use</h4>
        <p>
          I collect several different types of information for various purposes to provide and improve my Service to you.
        </p>
        <h4 class={styles.sectionTitle}>Contact Me</h4>
        <p>
          If you have any questions about this Privacy Policy, please contact me at <a href="mailto:support@g9aerospace.in">support@g9aerospace.in</a>.
        </p>
        <p>
          Please note that the author takes no responsibility for any and all losses, damages, or other liabilities resulting from the use of my Service. The Service is provided on an "as is" and "as available" basis, and the author makes no warranties, express or implied, regarding the Service or its availability.
        </p>
        <p>
          Users are advised to use the Service only if they agree to these terms and conditions and understand that the author will not be held liable for any and all losses, damages, or other liabilities resulting from the use of the Service.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Read my privacy policy to understand how I collect and use your data.",
    },
  ],
};
