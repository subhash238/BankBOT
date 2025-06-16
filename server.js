const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const comprehendRoutes = require('./routes/api');
const cors = require('cors');
const corsOptions = {
  origin: '*', // Allow all origins for simplicity, adjust as needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api', comprehendRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
