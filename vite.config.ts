import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

process.env.BROWSERSLIST_IGNORE_OLD_DATA = "true";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['bookless-triform-lukas.ngrok-free.dev']
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: ['bookless-triform-lukas.ngrok-free.dev']
  },

  build: {
    sourcemap: false,          // ✅ fixes sourcemap warnings
    target: "es2020",
    chunkSizeWarningLimit: 1000, // optional: suppress 500kb warning
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "SOURCEMAP_ERROR" ||
          warning.message.includes("Can't resolve original location of error")
        ) {
          return
        }

        warn(warning)
      },
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
