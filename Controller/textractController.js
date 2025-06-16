const fs = require("fs");
const path = require("path");
const { AnalyzeDocumentCommand } = require("@aws-sdk/client-textract");
const textractClient = require("../Aws/textractClient");

exports.extractText = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", req.file.path);
    const imageBytes = fs.readFileSync(filePath);

    const params = {
      Document: { Bytes: imageBytes },
      FeatureTypes: ["TABLES", "FORMS"],
    };

    const command = new AnalyzeDocumentCommand(params);
    const response = await textractClient.send(command);

    const textBlocks = response.Blocks.filter(b => b.BlockType === "LINE").map(b => b.Text).join("\n");

    res.json({ text: textBlocks });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
