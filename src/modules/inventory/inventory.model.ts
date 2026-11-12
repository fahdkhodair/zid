import mongoose, { Schema } from "mongoose";

const inventorySchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },

    zidProductId: {
      type: String,
      required: true,
    },

    foodicsProductId: {
      type: String,
      default: null,
    },

    zidQuantity: {
      type: Number,
      required: true,
      min: 0,
    },

    foodicsQuantity: {
      type: Number,
      required: true,
      min: 0,
    },

    availableQuantity: {
      type: Number,
      required: true,
      min: 0,
    },

    lastSyncedAt: {
      type: Date,
      default: null,
    },

    source: {
      type: String,
      enum: ["zid", "foodics"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Inventory = mongoose.model(
  "Inventory",
  inventorySchema
);