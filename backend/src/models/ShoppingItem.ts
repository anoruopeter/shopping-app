import { Schema, model, Document } from "mongoose";

export interface ShoppingItemDocument extends Document {
  name: string;
  bought: boolean;
  createdAt: Date;
}

const ShoppingItemSchema = new Schema<ShoppingItemDocument>({
  name: { type: String, required: true },
  bought: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const ShoppingItem = model<ShoppingItemDocument>(
  "ShoppingItem",
  ShoppingItemSchema
);