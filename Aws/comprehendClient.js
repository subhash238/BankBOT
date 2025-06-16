const { ComprehendClient } = require("@aws-sdk/client-comprehend");
const { fromEnv } = require("@aws-sdk/credential-provider-env");

const comprehendClient = new ComprehendClient({
  region: process.env.AWS_REGION,
  credentials: fromEnv(),
});

module.exports = comprehendClient;
