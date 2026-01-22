"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ShoppingItem_1 = require("../models/ShoppingItem");
const router = (0, express_1.Router)();
router.get("/", async (_, res) => {
    const items = await ShoppingItem_1.ShoppingItem.find().sort({ createdAt: -1 });
    res.json(items);
});
router.post("/", async (req, res) => {
    const { name } = req.body;
    const item = await ShoppingItem_1.ShoppingItem.create({ name });
    res.status(201).json(item);
});
router.put("/:id", async (req, res) => {
    const { bought } = req.body;
    const item = await ShoppingItem_1.ShoppingItem.findByIdAndUpdate(req.params.id, { bought }, { new: true });
    res.json(item);
});
router.delete("/:id", async (req, res) => {
    await ShoppingItem_1.ShoppingItem.findByIdAndDelete(req.params.id);
    res.status(204).send();
});
exports.default = router;
