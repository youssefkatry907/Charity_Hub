const express = require('express');
const Joi = require('joi');
const validateRequest = require('../middlewares/ValidateRequest');
const CharityController = require('../controllers/CharityController');
const authenticate = require('../middlewares/authenticator');

const router = express.Router();

const charitySchema = Joi.object({
  name: Joi.string().required(),
  goal: Joi.number().required(),
  description: Joi.string().optional(),
});

router.post('/', authenticate, validateRequest(charitySchema), CharityController.createCharity);

module.exports = router;
