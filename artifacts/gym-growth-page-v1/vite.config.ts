import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
// Only the selected gym's data is bundled into a build (set VITE_GYM per Vercel project).
const gymSlug = process.env.VITE_GYM || "house-of-fitness";

export default defineConfig({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@gym-data": path.resolve(import.meta.dirname, "src", "gyms", `${gymSlug}.ts`),
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets",
      ),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port,
    strictPort: false,
    host: "0.0.0.0",
  },

  preview: {
    port,
    host: "0.0.0.0",
  },
});
