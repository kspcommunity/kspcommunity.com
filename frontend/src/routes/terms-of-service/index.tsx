import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./terms-of-service.module.css";

export default component$(() => {
  return (
    <>
      <div id="terms-of-service" class={`${styles.container} ${styles.containerCenter}`}>
        <h1>
          Terms of Service
        </h1>
        <p>
          Welcome to the Terms of Service of this website. These terms govern your use of my website and services. By accessing or using my services, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the services.
        </p>
        <h4 class={styles.sectionTitle}>Use License</h4>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on my website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
        </p>
        <ul>
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on this website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by me at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>
        <h4 class={styles.sectionTitle}>Disclaimer</h4>
        <p>
          The materials on my website are provided on an 'as is' basis. I makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p>
          Further, I do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>
        <h4 class={styles.sectionTitle}>Limitations</h4>
        <p>
          In no event shall I (G9 Aerospace) or my affiliates be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website, even if I or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        </p>
        <h4 class={styles.sectionTitle}>Revisions and Errata</h4>
        <p>
          The materials appearing on my website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on its website are accurate, complete, or current. I may make changes to the materials contained on its website at any time without notice. I do not, however, make any commitment to update the materials.
        </p>
        <h4 class={styles.sectionTitle}>Links</h4>
        <p>
          I has not reviewed all of the sites linked to its website and am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by me of the site. Use of any such linked website is at the user's own risk.
        </p>
        <h4 class={styles.sectionTitle}>Modifications</h4>
        <p>
          I may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service.
        </p>
        <h4 class={styles.sectionTitle}>Governing Law</h4>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
        <h4 class={styles.sectionTitle}>Contact</h4>
        <p>
          If you have any questions about these Terms of Service, please contact me at <a href="mailto:support@g9aerospace.in">support@g9aerospace.in</a>.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Terms of Service",
  meta: [
    {
      name: "description",
      content: "Read my terms of service to understand the rules and regulations governing the use of my website and services.",
    },
  ],
};
