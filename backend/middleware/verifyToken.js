const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";

const verifyToken=(req, res, next)=> {
  const token = req.header('Authorization');
  /* console.log(token); */
  if (!token) {
    return res.status(401).json({ error: 'token not found' });
  }

  /* constjwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ err });
    }
    req.userId = decoded.userId;
    next();
  }); */
  
  try {
      const data=jwt.verify(token,JWT_SECRET);
      req.userId=data.userId;
      next();

  } catch (error) {
    console.log(error);
  }
}


    


/* try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
} catch (error) {
    console.log(error);
    res.status(401).send({ error: "please authenticate yourself" });
} */

module.exports = verifyToken;
