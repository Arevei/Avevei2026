import path from "path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";

process.env.BROWSERSLIST_IGNORE_OLD_DATA = "true";

const readRequestBody = (req: import("http").IncomingMessage) =>
  new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });

const demoBookingApiPlugin = (): Plugin => ({
  name: "arevei-demo-booking-api",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.startsWith("/api/demo-booking")) {
        return next();
      }

      const { default: handler } = await import("./api/demo-booking.js");
      const rawBody = await readRequestBody(req);
      const parsedBody = rawBody ? JSON.parse(rawBody) : {};

      const vercelLikeReq = {
        ...req,
        method: req.method,
        body: parsedBody,
      };

      const vercelLikeRes = {
        status(code: number) {
          res.statusCode = code;
          return this;
        },
        setHeader(key: string, value: string) {
          res.setHeader(key, value);
          return this;
        },
        end(body?: string) {
          res.end(body);
        },
      };

      await handler(vercelLikeReq, vercelLikeRes);
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "DEMO_FORM_ADMIN_EMAIL",
  ]) {
    process.env[key] = process.env[key] || env[key];
  }

  return {
  plugins: [react(), demoBookingApiPlugin()],

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
}});
