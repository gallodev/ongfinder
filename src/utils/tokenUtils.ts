require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const jwt  = require('jsonwebtoken');

function decodeJWT(payload) {
  return jwt.verify(payload,process.env.SECRET, (err,decoded) => {
    if(err) throw err;
    return decoded;
  });
}

function getJWTSign(payload,type) {
  if(type === 'ong') {
    payload.user_type = 'ong';
  } else {
    payload.user_type = 'user';
  }

  return jwt.sign(payload,process.env.SECRET, {
    expiresIn: '2 days',
  });
} 


module.exports = {
  decodeJWT,
  getJWTSign
};