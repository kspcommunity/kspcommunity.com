import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import SecondaryFooter from "../components/secondary footer/secondary-footer";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
      <SecondaryFooter />
    </>
  );
});

export const head: DocumentHead = {
  title: "404 Not Found",
  meta: [
    {
      name: "description",
      content: "The page you are looking for does not exist.",
    },
  ],
};
