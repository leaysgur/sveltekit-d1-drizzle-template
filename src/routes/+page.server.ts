import { drizzle } from "drizzle-orm/d1";
import { todos } from "../lib/server/schema";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ platform }) => {
  const db = drizzle(platform?.env.DB!);
  const res = await db.select({ name: todos.name }).from(todos).all();

  return {
    todos: res,
  };
};
