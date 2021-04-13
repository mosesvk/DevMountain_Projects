const creds = require('./credentials');
const userData = require('./userData');
const bcrypt = require('bcryptjs');

module.exports = {
  login(req, res) {
    const { email, password } = req.body;
    if (email === creds.email && password === creds.password) {
      req.session.user = userData;
      res.status(200).send({ loggedIn: true })
    } else {
      res.status(401).send({ loggedIn: false })
    }
  },
  register: async function (req, res) {
    const {username, password, isAdmin} = req.body;
    const db = req.app.get('db');
    const result = await db.get_user({username});
    const existingUser = result[0];
    if (existingUser) {
        return res.status(409).send('Username taken');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const registeredUser = await db.register_user([isAdmin, username, hash])
    const user = registeredUser[0];
    req.session.user = {isAdmin: user.is_admin, id: user.id, username: user.username};
    return res.status(201).send(req.session.user);
},
  logout(req, res) {
    req.session.destroy();
    res.redirect('http://localhost:3000')
  },
  userData(req, res) {
    const { user } = req.session;
    if (user) return res.status(200).send({ loggedIn: true, user });
    else return res.sendStatus(401)
  }
}