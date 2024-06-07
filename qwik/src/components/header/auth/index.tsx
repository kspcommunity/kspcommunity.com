import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuUserCircle } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <>
        <li>
          <Link href="/auth/login"><LuUserCircle/> Login</Link>
        </li>
    </>
  );
});
