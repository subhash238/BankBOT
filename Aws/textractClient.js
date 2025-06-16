const { TextractClient } = require("@aws-sdk/client-textract");
const { fromEnv } = require("@aws-sdk/credential-provider-env");

const textractClient = new TextractClient({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

module.exports = textractClient;
