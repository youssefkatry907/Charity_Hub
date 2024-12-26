const tokenHandler = require("../../application/services/authHandler");

module.exports = () => {
    return async (req, res, next) => {
        try {
            if (!req.headers.authorization) {
                return res.status(401).json({
                    success: false,
                    statusCode: 401,
                    message: "Authorization token is required !",
                });
            }

            let barerToken = req.headers.authorization;
            let token = barerToken.split(" ")[1];
            let decoded = tokenHandler.compareToken(token);

            if (!decoded) {
                return res.status(401).json({
                    success: false,
                    status: 401,
                    message: "Invalid Authorization Token !",
                });
              }

            req.user = decoded;
            next();
        }
        catch (err) {
            return res.status(401).json({
                success: false,
                status: 401,
                message: err.message,
            });
        };
    }
};