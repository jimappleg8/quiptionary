module.exports = {
  HOST: "/cloudsql/quiptionary-api:us-central1:quiptionary-mysql", // "35.193.95.241",
  USER: "quipUser",
  PASSWORD: "kl33nex",
  DB: "quiptionary",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};