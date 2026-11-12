import { Worker } from "bullmq";
import { redisConnection } from "../config/redis";

const worker = new Worker(
  "sync-queue",
  async (job) => {
    console.log("Processing job:", job.name);

    switch (job.name) {
      case "PRODUCT_SYNC":
        // Product synchronization
        break;

      case "ORDER_SYNC":
        // Order synchronization
        break;

      case "INVENTORY_SYNC":
        // Inventory synchronization
        break;

      default:
        throw new Error(`Unknown job type: ${job.name}`);
    }
  },
  {
    connection: redisConnection,
    concurrency: 5,
  }
);

worker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, error) => {
  console.error(`Job ${job?.id} failed:`, error.message);
});