const express = require("express");
const applicationRoutes = require("../presentation/routes/index");
const errorHandler = require("../presentation/middlewares/errorHandler");
const logger = require("../presentation/middlewares/logger");


const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(logger);

applicationRoutes(app);

const { databaseConnection } = require("../infrastructure/db/mongoose");
databaseConnection();

module.exports = app;
