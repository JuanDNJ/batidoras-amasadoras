import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://batidoras-amasadoras.web.app",
  integrations: [
    mdx({
      optimize: true,
    }),
    sitemap(),
    tailwind(),
  ],
});
