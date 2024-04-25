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
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <p>
          We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
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