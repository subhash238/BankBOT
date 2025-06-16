const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

const { analyzeSentiment } = require("../Controller/comprehendController");
const { generateResponse } = require("../Controller/bedrockController");
const {extractText} = require("../Controller/textractController");

router.post("/sentiment", analyzeSentiment);
router.post("/genai", generateResponse);
router.post("/extract-text", upload.single("document"), extractText);

module.exports = router;
