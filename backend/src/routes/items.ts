import { Router } from "express";
import { ShoppingItem } from "../models/ShoppingItem";

const router = Router();

router.get("/", async (_, res) => {
  const items = await ShoppingItem.find().sort({ createdAt: -1 });
  res.json(items);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const item = await ShoppingItem.create({ name });
  res.status(201).json(item);
});

router.put("/:id", async (req, res) => {
  const { bought } = req.body;
  const item = await ShoppingItem.findByIdAndUpdate(
    req.params.id,
    { bought },
    { new: true }
  );
  res.json(item);
});

router.delete("/:id", async (req, res) => {
  await ShoppingItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;