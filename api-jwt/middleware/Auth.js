const JWT = require('jsonwebtoken');
const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(200).send({
                success: false,
                message: "Token is blank",
            })
        }

        let newToken = token.slice(7);
        JWT.verify(newToken, 'tech', (err, decode) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: "Token is not valid",
                })
            }
            req.user = decode.payload;
            return next();
        })
        
    } catch (err) {
        return res.status(501).send({
            success: false,
            error: err
        })
    }
}

const checkAdmin = async (req, res, next) => {
    if (req.user?.role != 'admin') {
        return res.status(403).send({
            success: false,
            message: "You are not admin"
        })
    }
    return next();
}


module.exports = {
    verifyToken,checkAdmin
}