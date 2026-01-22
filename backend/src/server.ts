import mongoose from "mongoose";
import { app } from "./app";

const PORT = 4000;
const MONGO_URI = "mongodb://localhost:27017/shoppinglist";

mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});