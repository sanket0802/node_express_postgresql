module.exports = {

  POSTGRES_URL:"postgres://default:PEIXl7nrGfm4@ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  POSTGRES_PRISMA_URL:"postgres://default:PEIXl7nrGfm4@ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15",
  POSTGRES_URL_NO_SSL:"postgres://default:PEIXl7nrGfm4@ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech:5432/verceldb",
  POSTGRES_URL_NON_POOLING:"postgres://default:PEIXl7nrGfm4@ep-small-river-a4pf78lk.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
  POSTGRES_USER:"default",
  POSTGRES_HOST:"ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech",
  POSTGRES_PASSWORD:"PEIXl7nrGfm4",
  POSTGRES_DATABASE:"verceldb",
  dialect: "postgres",

  pool: {

    max: 5,

    min: 0,

    acquire: 30000,

    idle: 10000

  }

};
