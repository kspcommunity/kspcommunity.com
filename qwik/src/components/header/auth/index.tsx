import { component$ } from "@builder.io/qwik";
import { BsBoxArrowInRight } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <>
        <li>
          <a href="/auth/login"><BsBoxArrowInRight/> Login</a>
        </li>
    </>
  );
});
