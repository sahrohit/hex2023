import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://hexhimalaya.com/",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    partytown(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
      },
      remarkPlugins: [remarkToc, { headings: ["h1", "h2"] }],
      remarkRehype: {
        footnoteLabel: "Footnotes",
      },
      gfm: true,
    }),
  ],
  vite: {
    ssr: {
      // external: ["svgo"],
    },
  },
});
