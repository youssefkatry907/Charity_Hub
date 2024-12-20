const express = require('express');
const charityRoutes = require('../presentation/routes/CharityRoutes');
const errorHandler = require('../presentation/middlewares/errorHandler');
const logger = require('../presentation/middlewares/logger');

const app = express();
app.use(express.json());

app.use('/api/charities', charityRoutes);
app.use(errorHandler);
app.use(logger);

module.exports = app;
