const express = require('express');
const app = express.Router();
const charityController = require('../controllers/charityController');

const validateRequest = require('../middlewares/validator');
const authenticate = require('../middlewares/authenticator');

const {
    createCharityValid,
    getCharityValid,
} = require('../../application/validation/charityValidator');


app.post('/createCharity', validateRequest(createCharityValid), charityController.createCharity);
app.get('/getCharity', validateRequest(getCharityValid, "query"), charityController.getCharity);

module.exports = app;
