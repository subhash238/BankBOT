const { InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");
const bedrockClient = require("../Aws/bedrockClient");

exports.generateResponse = async (req, res) => {
  try {
    const { messages } = req.body;
    const body = {
      anthropic_version: "bedrock-2023-05-31",
      messages: messages,
      max_tokens: 300,
    };

    const command = new InvokeModelCommand({
      modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(body),
    });

    const response = await bedrockClient.send(command);
    const responseString = await response.body.transformToString();
    const parsed = JSON.parse(responseString);
    // Check if the response contains content
    res.json(parsed.content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
