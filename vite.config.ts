import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

import packageConfig from "./package.json";

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageConfig.version),
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({ customViteReactPlugin: true }),
    react(),
    tailwindcss(),
  ],
});
