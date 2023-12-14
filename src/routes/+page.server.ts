import { drizzle } from "drizzle-orm/d1";
import { todos } from "$lib/server/schema";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform }) => {
  const db = drizzle(platform?.env.DB!);

  const todoRows = await db.select().from(todos).all();

  return {
    todos: todoRows,
  };
};

export const actions = {
  default: async ({ request, platform }) => {
    const db = drizzle(platform?.env.DB!);

    const data = await request.formData();
    const name = String(data.get("name"));
    const points = Number(data.get("points"));

    await db.insert(todos).values({ name, points });
  },
} satisfies Actions;
