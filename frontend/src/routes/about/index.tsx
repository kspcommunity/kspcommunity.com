// frontend\src\routes\about\index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Infobox from "../../components/starter/infobox/infobox";
import backgroundImage from "../../media/background/bg2.svg";

export default component$(() => {
  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div class="container container-center container-spacing-xl">
        <h1>About KSP Community</h1>
        <p>
          Welcome to KSP Community, the online hub for Kerbal Space Program (KSP) enthusiasts! Join us as we explore the wonders of space together.
        </p>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-info">
            About KSP
          </div>
          <p>
            Kerbal Space Program (KSP) is a space flight simulation game where you can design and manage your own space program.
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-team">
            Our Community
          </div>
          <p>
            At KSP Community, we're passionate about connecting KSP players from around the world. Join our vibrant community forums and share your adventures!
          </p>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-mission">
            Our Mission
          </div>
          <p>
            Our mission is to provide a welcoming and inclusive space for KSP players of all skill levels to learn, collaborate, and have fun together.
          </p>
        </Infobox>
      </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About KSP Community",
  meta: [
    {
      name: "description",
      content: "Learn more about KSP Community, the online hub for Kerbal Space Program enthusiasts.",
    },
  ],
};
