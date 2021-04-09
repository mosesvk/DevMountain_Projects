require('dotenv').config();
const express = require('express');
const session = require('express-session');
const user = require('./controllers/userCtrl')
const program = require('./controllers/programCtrl')
const massive = require('massive')


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());
app.use(session({
  secret: SESSION_SECRET, 
  resave: false, 
  saveUninitialized: false
}))

app.post('/auth/login', user.login)
app.post('/auth/register', user.register)
app.get('/auth/logout', user.logout)
app.put('/auth/:username', user.userUpdate)
app.delete('/auth/:id', user.deleteUser)

// app.use((req, res, next) => {
//   if (req.session.user) return next();
//   else res.sendStatus(401)
// })

app.post('/api/programs', program.newUserProgram)
app.delete('/api/programs/:id',program.deleteUserProgram)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance);
        app.listen(SERVER_PORT, () => {
            console.log(`Da server is listening on ${SERVER_PORT} mon.`)
        });
      })
      .catch(err => console.log(err));