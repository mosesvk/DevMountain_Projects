const bcrypt = require('bcryptjs');

module.exports = {
  login: async(req, res) => {
    const { username, password } = req.body;

  },
  register: async (req, res) => {
    const {username, password, first_name, last_name, email} = req.body;
    const db = req.app.get('db');
    const result = await db.get_user({username});
    const existingUser = result[0];
    if (existingUser) {
        return res.status(409).send('Username taken');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registeredUser = await db.register_user({username, first_name, last_name, email, hash})
    const user = registeredUser[0];
    req.session.user = {userId: user.user_id, username: user.username};
    return res.status(201).send(req.session.user);
},
  logout: async(req, res) =>  {
    req.session.destroy();
    res.redirect('http://localhost:3000')
  },
  userData: async(req, res) => {
    const { user } = req.session;
    if (user) return res.status(200).send({ loggedIn: true, user });
    else return res.sendStatus(401)
  }
}