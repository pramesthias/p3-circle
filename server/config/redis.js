const Redis = require("ioredis");

const redis = new Redis({
  port: 12135, // Redis port
  host: "redis-12135.c252.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: process.env.REDIS_PWD,
  db: 0, // Defaults to 0
});

module.exports = redis;

// import { createClient } from "redis";

// const client = createClient({
//   password: "ENV",
//   socket: {
//     host: "redis-12135.c252.ap-southeast-1-1.ec2.cloud.redislabs.com",
//     port: 12135,
//   },
// });
