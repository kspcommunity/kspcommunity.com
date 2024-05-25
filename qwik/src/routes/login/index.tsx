import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Login from "../../components/auth/login";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        
        <Login />

        Don't have an account yet? <Link href="/signup">Sign up</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
