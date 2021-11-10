const config = require('./config')

const commonOptions = {
    client: "pg",
    pool: {
      min: 2,
      max: 10,
    },
  };

  const seedsAndMigrationsConfig = {
    seeds: {
      directory: "./seeds",
      loadExtensions: [".js"],
      stub: "./seeds/utils/seed_stub.js",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  };

  const knexConfig = {
    ...commonOptions,
    ...seedsAndMigrationsConfig,
    ...config
  };

  module.exports = {
    ...knexConfig,
  };