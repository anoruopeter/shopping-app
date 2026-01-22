"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const PORT = 4000;
const MONGO_URI = "mongodb://localhost:27017/shoppinglist";
mongoose_1.default.connect(MONGO_URI).then(() => {
    console.log("MongoDB connected");
    app_1.app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
