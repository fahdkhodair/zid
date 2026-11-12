import mongoose, { Schema } from "mongoose";

const shippingAddressSchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    postalCode: String,
  },
  { _id: false }
);

const shipmentSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    zidOrderId: {
      type: String,
      required: true,
    },

    shippingCompany: {
      type: String,
      required: true,
    },

    trackingNumber: {
      type: String,
      default: null,
    },

    trackingUrl: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "created",
        "picked_up",
        "in_transit",
        "out_for_delivery",
        "delivered",
        "failed",
        "returned",
        "cancelled",
      ],
      default: "pending",
    },

    shippingAddress: {
      type: shippingAddressSchema,
      required: true,
    },

    shippingCost: {
      type: Number,
      required: true,
      min: 0,
    },

    externalShipmentId: {
      type: String,
      default: null,
    },

    shippedAt: Date,
    deliveredAt: Date,
  },
  {
    timestamps: true,
  }
);

export const Shipment = mongoose.model(
  "Shipment",
  shipmentSchema
);