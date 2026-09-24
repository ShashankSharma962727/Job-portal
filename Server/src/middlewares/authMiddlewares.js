const jwt = require('jsonwebtoken');

const accessTokenMiddleware = (req, res, next) => {
    try{
        const header = req.headers.authorization;

        if(!header){
            return res.status(400).json({message: "Required Access token!"});
        }

        const token = header.split(" ")[1];

        if(!token){
            return res.status(400).json({message: "Required Access token!"});
        }

        const decode = jwt.verify(token, process.env.accessTokenSecretKey);

        req.user = decode
    
        next();
    }
    catch(error){
        return res.status(500).json({ message: "Server Error" });
    }
}

module.exports = accessTokenMiddleware;