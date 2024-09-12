/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:qKswFtu1AJ2U@ep-white-base-a5ndsmu5.us-east-2.aws.neon.tech/ai-generate?sslmode=require',
    }
  };