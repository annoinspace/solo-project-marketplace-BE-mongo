import mongoose from "mongoose"

const { Schema, model } = mongoose

const cartSchema = new Schema(
  {
    owner: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    cartContent: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: "Product" }
      }
    ]
  },
  { timestamps: true }
)

export default model("Cart", cartSchema)
