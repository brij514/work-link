import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    working_hr: {
      type: Number,
      required: true,
    },
    worker: {
      type: Number,
      required: true,
    },
    protective_gear: {
      type: Boolean,
      required: true,
    },
    insurance: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    transportation: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
