import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    // eslint-disable-next-line node/prefer-global/process
    url: process.env.DATABASE_URL as string,
  },
  casing: "snake_case",
});
