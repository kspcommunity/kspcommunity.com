import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import kspcommunitylogo from "../../media/kspcommunity.png";
import { component$ } from "@builder.io/qwik";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>KSPC - {head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#cadbed" /> 
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Open Graph tags */}
      <meta property="og:title" content={`KSP Community - ${head.title}`} />
      <meta property="og:description" content={head.meta.find((m) => m.name === "description")?.content} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:image" content={kspcommunitylogo} />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
    </>
  );
});
