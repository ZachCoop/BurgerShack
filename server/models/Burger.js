import mongoose from "mongoose"

const Schema = mongoose.Schema

export const BurgerSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

  }
)