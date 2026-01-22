"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingItem = void 0;
const mongoose_1 = require("mongoose");
const ShoppingItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    bought: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
exports.ShoppingItem = (0, mongoose_1.model)("ShoppingItem", ShoppingItemSchema);
