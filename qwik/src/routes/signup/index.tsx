import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Signup from "../../components/auth/signup";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        
        <Signup />
        <br/>
        Have an existing account? <Link href="/login">Login</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "SignUp",
  meta: [
    {
      name: "description",
      content: "Signup for an account",
    },
  ],
};
