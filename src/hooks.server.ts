import { D1Database$ } from "cfw-bindings-wrangler-bridge";
import { dev } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (dev) {
    event.platform = {
      env: { DB: new D1Database$("DB") as D1Database },
    };
  }

  return resolve(event);
};

// OR using `unstable_dev()`

// import { getBindings } from "cfw-bindings-wrangler-bridge";
// import { unstable_dev } from "wrangler";
// import { dev } from "$app/environment";
// import type { Handle } from "@sveltejs/kit";
// import type { UnstableDevWorker } from "wrangler";

// let worker: UnstableDevWorker;
// let env: App.Platform["env"];
// export const handle: Handle = async ({ event, resolve }) => {
//   if (dev) {
//     if (!env) {
//       worker = await unstable_dev(
//         "./node_modules/cfw-bindings-wrangler-bridge/worker/index.js",
//         { experimental: { disableExperimentalWarning: true } },
//       );
//       env = await getBindings({
//         bridgeWorkerOrigin: `http://${worker.address}:${worker.port}`,
//       });
//     }
//
//     event.platform = { env };
//   }
//
//   return resolve(event);
// };

