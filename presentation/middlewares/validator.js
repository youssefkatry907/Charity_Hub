const validator = (schema, type = 'body') => {
  return (req, res, next) => {
      try {
          let validation = []
          let bodyValidation, paramsValidation;

          // in case we need to validate body
          if (type === 'body' || type === 'bodyAndQuery') {
              bodyValidation = schema.body.validate(req.body);
              if (bodyValidation.error) {
                  validation.push(bodyValidation.error.details[0].message)
              }
          }

          // in case we need to validate params
          if (type === 'query' || type === 'bodyAndQuery') {
              paramsValidation = schema.query.validate(req.query);
              if (paramsValidation.error) {
                  validation.push(paramsValidation.error.details[0].message)
              }
          }

          if (validation.length) {
              return res.status(400).json({
                  success: false,
                  error: "validation error",
                  message: validation[0],
              })
          }
          next();
      }
      catch (err) {
          return res.status(500).json({
              success: false,
              error: "validation error",
              message: err.message
          })
      }

  }
};

module.exports = validator;