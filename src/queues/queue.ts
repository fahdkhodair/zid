import { Queue } from "bullmq";
import { redisConnection } from "../config/redis";

export const syncQueue = new Queue("sync-queue", {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000,
    },
    removeOnComplete: 100,
    removeOnFail: 500,
  },
});