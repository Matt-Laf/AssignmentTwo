import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://matt-laf.github.io/AssignmentTwo",
  plugins: [react()],
});
