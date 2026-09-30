const jwt = require("jsonwebtoken");

const checkRoleMiddleware = (...allowedRole) => {
    return (req, res, next) => {
        if(!req.user || !allowedRole.includes(req.user.role)){
            return res.status(403).json({
                message: "Access Denied!"
            });
        }

        next();
    }
}

module.exports = checkRoleMiddleware;