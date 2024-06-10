import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Login from "../../components/auth/login";

export default component$(() => {
  return (
    <>
      <div class="container container-center container-spacing-xl">
        
        <Login />
        <br/>
        Don't have an account yet? <Link href="/signup">Sign up</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "LogIn to your account",
    },
  ],
};