const joi = require('joi');
// const objectId = require('joi-objectid')(joi);

module.exports = {
    createUserValid: {
        body: joi.object().required().keys({
            name: joi.string().required().min(3).max(50)
            .pattern(new RegExp("^[a-zA-Zà-ÿÀ-ÿ'\\- ]+$")).messages({
                'string.empty': 'name cannot be an empty field',
                'any.required': 'name is a required field',
                'string.base': 'name should be a type of text',
                'string.min': `name should have a minimum length of 3 characters`,
                'string.max': `name should have a maximum length of 50 characters`,
            }),
            email: joi.string().email().required().messages({
                'string.empty': 'email cannot be an empty field',
                'any.required': 'email is a required field',
                'string.base': 'email should be a type of text',
                'string.email': 'email should be a valid email',
            }),
            password: joi.string().required().min(6).max(20).messages({
                'string.empty': 'password cannot be an empty field',
                'any.required': 'password is a required field',
                'string.base': 'password should be a type of text',
                'string.min': `password should have a minimum length of 6 characters`,
                'string.max': `password should have a maximum length of 20 characters`,
            }),
            role: joi.string().required().valid('user', 'admin').messages({
                'string.empty': 'role cannot be an empty field',
                'any.required': 'role is a required field',
                'string.base': 'role should be a type of text',
                'any.only': 'role should be either user or admin',
            }),
        })
    }
};