import mongoose, { Schema } from "mongoose";

const syncLogSchema = new Schema(
  {
    eventId: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      enum: ["zid", "foodics", "shipping"],
      required: true,
    },

    entity: {
      type: String,
      enum: [
        "product",
        "order",
        "inventory",
        "shipment",
      ],
      required: true,
    },

    entityId: {
      type: String,
      required: true,
    },

    direction: {
      type: String,
      enum: [
        "zid_to_foodics",
        "foodics_to_zid",
        "zid_to_shipping",
        "shipping_to_zid",
      ],
      required: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "success",
        "failed",
        "retrying",
      ],
      default: "pending",
    },

    attempts: {
      type: Number,
      default: 0,
    },

    maxAttempts: {
      type: Number,
      default: 3,
    },

    requestPayload: {
      type: Schema.Types.Mixed,
    },

    responsePayload: {
      type: Schema.Types.Mixed,
    },

    errorMessage: String,

    startedAt: Date,

    completedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate processing of the same event
syncLogSchema.index(
  { source: 1, eventId: 1 },
  { unique: true }
);

syncLogSchema.index({ status: 1, createdAt: -1 });

export const SyncLog = mongoose.model(
  "SyncLog",
  syncLogSchema
);