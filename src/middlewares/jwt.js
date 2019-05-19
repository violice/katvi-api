import jwt from 'jsonwebtoken';

const WHITE_LIST = [
  '/api/login',
  '/api/registration',
];

export default (req, res, next) => {
  if (WHITE_LIST.includes(req.path)) {
    next();
  } else {
    const { 'katvi-token': token } = req.cookies;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(403).json({ error: 'Failed to authenticate token' });
        } else if (new Date().getTime() / 1000 > decoded.exp) {
          res.status(403).json({ error: 'Token is expired' });
        } else {
          req.headers.user = decoded;
          next();
        }
      });
    } else {
      res.status(403).json({ error: 'No token provided' });
    }
  }
};
