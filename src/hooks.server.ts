import { createBridge } from "cfw-bindings-wrangler-bridge";
import { dev } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (dev) {
    const bridge = createBridge();
    event.platform = {
      env: {
        DB: bridge.D1Database("DB"),
      },
    };
  }

  return resolve(event);
};
