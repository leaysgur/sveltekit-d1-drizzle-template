import { unstable_dev } from "wrangler";
import { D1Database$ } from "cfw-bindings-wrangler-bridge";
import { drizzle } from "drizzle-orm/d1";
import { todos } from "../src/lib/server/schema";

console.log("ADD TODOS SCRIPT 🆕");
console.log("----------------------");

console.log("DevWorker is starting...");
const worker = await unstable_dev(
  "./node_modules/cfw-bindings-wrangler-bridge/worker/index.js",
  {
    local: true,
    experimental: { disableExperimentalWarning: true },
  },
);

const bridgeWorkerOrigin = `http://${worker.address}:${worker.port}`;
console.log("✅", "DevWorker is started at", bridgeWorkerOrigin);

const DB = new D1Database$("DB", { bridgeWorkerOrigin }) as D1Database;
const db = drizzle(DB);

console.log("Adding dummy todos...");
const values = [
  "Hello",
  "SvelteKit",
  "Cloudflare D1",
  "Drizzle",
  "Template",
].map((name, points) => ({ name, points }));

const result = await db.insert(todos).values(values);
console.log(result);

await worker.stop();
console.log("⚡", "Done!");
