# sveltekit-drizzle-d1-template

```sh
wrangler dev ./node_modules/cfw-bindings-wrangler-bridge/worker/index.js
npm run dev

npx tsx ./scripts/add-todos.ts
npx tsx ./scripts/delete-todos.ts

npx cfw-storage-bindings-studio
```

## Drizzle + D1 issues

- `WITHOUT ROWID` is not supported
  - https://github.com/drizzle-team/drizzle-orm/issues/408
- `CHECK` is not supported
  - https://github.com/drizzle-team/drizzle-orm/issues/880
- `sql<T>` helper is needed to avoid D1 bug when select the same column name from joined 2 tables
  - https://github.com/drizzle-team/drizzle-orm/issues/555
