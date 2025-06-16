const { BedrockRuntimeClient } = require("@aws-sdk/client-bedrock-runtime");
const { fromEnv } = require("@aws-sdk/credential-provider-env");

const bedrockClient = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

module.exports = bedrockClient;
