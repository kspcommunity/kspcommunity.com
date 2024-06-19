import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BsBoxArrowInRight } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <>
        <li>
          <Link href="/auth/login"><BsBoxArrowInRight/> Login</Link>
        </li>
    </>
  );
});
