require('dotenv').config();
const express = require('express'),
      app = express(),
      userCtrl = require('./controllers/user'),
      postCtrl = require('./controllers/posts'),
      massive = require('massive'),
      session = require('express-session'),
      bcrypt = require('bcryptjs')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Post Endpoints
app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)

massive({
  connectionString: CONNECTION_STRING, 
  ssl: {rejectUnauthorized: true}
})
  .then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, _ => console.log(`DB is up and running on ${SERVER_PORT}`));
  })

