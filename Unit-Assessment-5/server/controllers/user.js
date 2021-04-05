const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get('db');
    const result = await db.user.find_user_by_username([username]);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).send("Username taken.");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registeredUser = await db.user.create_user([
      username,
      hash,
      `https://robohash.org/${username}.png`,
    ]);
    const user = registeredUser[0];
    req.session.user = {
      id: user.id,
      username: user.username,
      password: user.password,
      profile_pic: user.profile_pic,
    };
    return res.status(201).send(req.session.user);
  },
  login: async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const foundUser = await req.app.get('db').user.find_user_by_username([username]);
    const user = foundUser[0];
    if (!user) {
      return res.status(409).send(`Username/Password doesn't match`);
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password);
    if (!isAuthenticated) {
      return res.status(403).send(`Username/Password doesn't match`);
    }
    req.session.user = {
      username: user.username,
      password: user.password,
      profile_pic: user.profile_pic,
    };
    return res.send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  },
  getUser: (req, res) => {
    if (req.session.user) {
      return res.send(req.session.user);
    }
    return res.sendStatus(404);
  },
};
