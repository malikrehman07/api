const express = require('express')
const router = express.Router()
const Compaign = require("../model/compaign")
require('dotenv').config()
const { verifyToken } = require('../middleware/auth')

router.post('/add', verifyToken, async (req, res) => {
    try {
        const compaignData = { ...req.body }
        const newCompaign = new Compaign(compaignData)
        await newCompaign.save()
        res.status(201).json({ message: "Compaign created successfully", isError: false, compaign: newCompaign })
    } catch (err) {
        res.status(500).json({ message: "Failed to create product", error: err.message, isError: true });
        console.error("❌ Product creation failed:", err);
    }
});
router.get("/read", async (req, res) => {
    try {
        const compaigns = await Compaign.find().sort({ createdAt: -1 });
        res.status(200).json({ message: "Products fetched successfully", compaigns, isError: false });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch products", error: error.message, isError: true });
    }
});

module.exports = router;