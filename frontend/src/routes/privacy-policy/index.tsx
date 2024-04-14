import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <div role="presentation" class="ellipsis ellipsis-green"></div>
      <div class="container container-center container-spacing-xl">
        <h3>
          Privacy Policy
        </h3>
      </div>

      <div class="container container-flex">
        <div>
          <p>
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
          </p>
          <p>
            The term 'company' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
          </p>
          <p>
            The use of this website is subject to the following terms of use:
          </p>
          <ul>
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of information].</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
          </ul>
          <p>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
          </p>
          <p>
            We are not responsible for any data leaks or data loss. Any and all information provided voluntarily by the user will be attempted to be kept safe to our maximum ability. However, data on the internet is never 100% safe, but we have taken all precautions.
          </p>
          <p>
            We encourage users to inform us of vulnerabilities privately, as our website is open-source.
          </p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy",
  meta: [
    {
      name: "description",
      content: "Privacy Policy for our website",
    },
  ],
};
