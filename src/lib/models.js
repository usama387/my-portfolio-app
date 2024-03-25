import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },

    img: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
