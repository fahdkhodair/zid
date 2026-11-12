import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db";
import { env } from "./config/env";
import routes from "./routes";
import { config } from "dotenv";
config();
import { errorMiddleware } from "./middlewares/error.middleware";
import { rateLimitMiddleware } from "./middlewares/ratelimit.middleware";

const app: Application = express();

// Security
app.use(helmet());

// Database
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

// Logging
app.use(morgan("combined"));

// Rate Limiting
app.use("/api/v1", rateLimitMiddleware);

// Webhooks Raw Body
app.use(
  "/api/v1/webhooks",
  express.raw({ type: "application/json" })
);

// Body Parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/v1", routes);

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler
app.use(errorMiddleware);
app.listen(env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
export default app;