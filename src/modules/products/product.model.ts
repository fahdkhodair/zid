import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    zidProductId: {
      type: String,
      required: true,
      unique: true,
    },

    foodicsProductId: {
      type: String,
      default: null,
    },

    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    sku: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);