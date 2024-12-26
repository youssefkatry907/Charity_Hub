const joi = require('joi');
const objectId = require('joi-objectid')(joi);

module.exports = {
    createCharityValid: {
        body: joi.object().required().keys({
            name: joi.string().required().min(3).max(50).messages({
                'string.empty': 'name cannot be an empty field',
                'any.required': 'name is a required field',
                'string.base': 'name should be a type of text',
                'string.min': `name should have a minimum length of 3 characters`,
                'string.max': `name should have a maximum length of 50 characters`,
            }),
            description: joi.string().min(3).max(500).messages({
                'string.base': 'description should be a type of text',
                'string.min': `description should have a minimum length of 3 characters`,
                'string.max': `description should have a maximum length of 500 characters`,
            }),
            goal: joi.number().required().messages({
                'number.base': 'goal should be a type of number',
                'any.required': 'goal is a required field',
                'number.empty': 'goal can not be an empty field',
            }),
            raised: joi.number().empty().messages({
                'number.base': 'raised should be a type of number',
                'number.empty': 'raised can not be an empty field',
            }),
        })
    },

    getCharityValid: {
        query: joi.object().required().keys({
            charityId: objectId().required().messages({
                "string.empty": "charityId can't be empty",
                "any.required": "charityId is required",
                "string.pattern.name": "you should enter valid ObjectId",
            }),
        })
    }
};