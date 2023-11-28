import type { Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./src/lib/server/schema.ts",
} satisfies Config;
