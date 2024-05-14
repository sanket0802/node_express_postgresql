module.exports = {
  HOST: "ep-small-river-a4pf78lk-pooler.us-east-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "PEIXl7nrGfm4",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
