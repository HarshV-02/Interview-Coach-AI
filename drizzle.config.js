/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Content-Generator_owner:eLSs5dCtUF8g@ep-empty-dream-a16uzh06.ap-southeast-1.aws.neon.tech/AI-Mocker-Interview?sslmode=require',
    }
};