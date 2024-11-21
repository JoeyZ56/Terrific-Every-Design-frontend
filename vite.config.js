import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.VITE_PORT || 5173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
});
