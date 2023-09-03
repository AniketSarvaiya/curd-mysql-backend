const jwt = require('jsonwebtoken');

const jwtgenerator = async (payload) => {

    const token = await jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: "3h" });

    // console.log({ token });
    return token;

}

module.exports = { jwtgenerator };