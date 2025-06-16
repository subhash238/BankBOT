const { BatchDetectSentimentCommand } = require("@aws-sdk/client-comprehend");
const comprehendClient = require("../Aws/comprehendClient");

exports.analyzeSentiment = async (req, res) => {
  try {
    const { text } = req.body;
    const command = new BatchDetectSentimentCommand({
      TextList: [text],
      LanguageCode: "en",
    });
    const result = await comprehendClient.send(command);
    res.json(result.ResultList[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
