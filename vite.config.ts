import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        {
          src: "public/images/*", // Source images in public/images
          dest: "dist/images", // Destination in dist/images
        },
      ],
      hook: "buildEnd", // Ensure this runs after the build
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
