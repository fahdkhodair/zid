import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    zidProductId: {
      type: String,
      required: true,
    },
    foodicsProductId: String,
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    zidOrderId: {
      type: String,
      required: true,
      unique: true,
    },

    foodicsOrderId: {
      type: String,
      default: null,
    },

    customerName: String,
    customerPhone: String,

    items: [orderItemSchema],

    subtotal: {
      type: Number,
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "processing",
        "completed",
        "cancelled",
        "failed",
      ],
      default: "pending",
    },

    paymentStatus: {
      type: String,
      default: "pending",
    },

    source: {
      type: String,
      enum: ["zid", "foodics"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);