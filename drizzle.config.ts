import type { Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./src/lib/server/schema.js",
} satisfies Config;
