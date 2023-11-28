// @ts-check
import { unstable_dev } from "wrangler";
import { D1Database$ } from "cfw-bindings-wrangler-bridge";
import { drizzle } from "drizzle-orm/d1";
import { todos } from "../src/lib/server/schema.js";

console.log("DELETE TODOS SCRIPT 💣");
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
console.log("DevWorker is started at", bridgeWorkerOrigin);

const DB = /** @type {D1Database} */ (
  new D1Database$("DB", { bridgeWorkerOrigin })
);
const db = drizzle(DB);

console.log("Deleting all todos...");
const result = await db.delete(todos);
console.log(result);

await worker.stop();
console.log("Done! ⚡");
