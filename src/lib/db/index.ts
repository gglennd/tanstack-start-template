import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(import.meta.env.DATABASE_URL);
const db = drizzle({ client, schema, casing: "snake_case" });

export default db;
