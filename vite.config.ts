import { cjsInterop } from "vite-plugin-cjs-interop";

import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    cjsInterop({
      dependencies: ["@mui/icons-material/*", "@mui/material/Unstable_Grid2"],
    }),
  ],
});
