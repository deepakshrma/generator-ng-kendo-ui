// server.js
"use strict";
const http = require('http');
const jsonServer = require('json-server');
var bodyParser = require('body-parser')
const cors = require('cors');
const data = require('./db.json');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 4100;
const isAuthorized = (request, response, next) => {
  if (/localhost/.test(request.hostname)
    || /localhost/.test(request.headers['x-ng-kendo-header'])) {
    return next(); // continue to JSON Server router
  }
  response.send({error: 'Unauthorized! You can use json server in dev mode only'}, 401);
};
server.use(middlewares);
server.use(isAuthorized);
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json());
// Add custom routes before JSON Server router
server.get('/all', (req, res) => {
  res.send(router.db.getState());
});
server.post('/login', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const isLogin = data.users.some((user) => {
    console.log(req.body.password, user.password)
    return user.password === req.body.password;
  });
  if (isLogin) {
    res.send({token: 'xxxx-xxxx'});
    return;
  }
  res.sendStatus(401);
});
server.use(cors());
server.use(router);
server.listen(PORT, () => {
  console.log(`Mock Server is running on http://localhost:${PORT}`);
});
