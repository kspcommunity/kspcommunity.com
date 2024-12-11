import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
        <div role="presentation" class="ellipsis"></div>
        <div class="container container-center">
            <h2>Test</h2>
            <p>All pages under the URL path "/test/ are for testing and R&D purposes</p>
            <p>The test directory will be removed once the site is ready for production</p>
            <p>By using these pages, you understand you are not able to hold KSP Community and its affiliates responsible under any circumstances</p>
            <p>Good luck developer!</p>
        </div>
        <Slot />
    </>
  );
});