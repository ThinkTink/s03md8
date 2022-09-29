const JWT_EXPIRES_IN_MS = 86400;
const jwt = require('jsonwebtoken');

/**
 *
 * @param {number} userId
 * @returns Signed JSON Web Token (JWT)
 */
const generateSignedJWT = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.SESSION_SECRET, {
    expiresIn: JWT_EXPIRES_IN_MS,
  });
  return token;
};

/**
 * Parse the raw authorization header (Bearer token) and return the JWT
 * @param {string} rawAuthorizationHeader
 * @returns
 */
const parseBearerToken = (rawAuthorizationHeader) => {
  if (typeof rawAuthorizationHeader === 'undefined') return null;
  const split = rawAuthorizationHeader.split(' ');
  if (split.length < 2) return null;
  return split[1];
};

/**
 * Get date from 
 * @param {string} rawAuthorizationHeader
 * @returns
 */
 const getDate = (dateObj, orderBy) => {
  if (!dateObj || !orderBy){
    return null; 
  }

  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  if (!(month && day && year)){
    return null; 
  }

  if (orderBy === "month"){
    return `${month}-${year}`
  } else if (orderBy === "year"){
    return `${year}`
  } else {
    return `${month}-${day}-${year}`
  }
};


module.exports = { generateSignedJWT, parseBearerToken, getDate };

