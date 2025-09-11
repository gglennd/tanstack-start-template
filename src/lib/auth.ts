import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { reactStartCookies } from "better-auth/react-start";

import db from "./db";
import * as schema from "./db/schema";

export const auth = betterAuth({
  baseURL: import.meta.env.BETTER_AUTH_URL,
  secret: import.meta.env.BETTER_AUTH_SECRET,
  plugins: [
    openAPI({ disableDefaultReference: import.meta.env.PROD }),
    reactStartCookies(),
  ],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  telemetry: {
    enabled: false,
  },
});
