import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  async function fetchData() {
    try {
      const response = await fetch("https://api.kspcommunity.com/api/users");
      return response.text();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const userDataPromise = fetchData();

  return (
    <>
      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
        <pre>{userDataPromise}</pre>
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
