
import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,

  MONGODB_URI: process.env.MONGODB_URI!,

  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  REDIS_URL: process.env.REDIS_URL || "redis://127.0.0.1:6379",

  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",

  API_TIMEOUT: Number(process.env.API_TIMEOUT) || 15000,

  ZID_API_URL: process.env.ZID_API_URL!,
  ZID_API_BASE_URL: process.env.ZID_API_BASE_URL!,
  ZID_ACCESS_TOKEN: process.env.ZID_ACCESS_TOKEN!,

  FOODICS_API_URL: process.env.FOODICS_API_URL!,
  FOODICS_API_BASE_URL: process.env.FOODICS_API_BASE_URL!,
  FOODICS_CLIENT_ID: process.env.FOODICS_CLIENT_ID!,
  FOODICS_CLIENT_SECRET: process.env.FOODICS_CLIENT_SECRET!,

  SHIPPING_API_URL: process.env.SHIPPING_API_URL!,
  SHIPPING_API_KEY: process.env.SHIPPING_API_KEY!,
};


