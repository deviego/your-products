import jwt from "jsonwebtoken";
import authConfig from "../config/auth";
import User from "../models/User";
import  {checkPassword}  from "../services/auth";

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "user/ password invalid aqui" });
    }

    if (!checkPassword(user, password)) {
      return res.status(401).json({ error: "user/ password invalid" });
    }

    const { id } = user;
    return res.json({
      user: {
        id,
        email,
      },
      token: jwt.sign({id}, authConfig.secret, {
        expiresIn:authConfig.expireIn,
      })
    });
  }
}

export default new SessionController();
