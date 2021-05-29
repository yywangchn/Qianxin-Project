const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res, next) => {
  res.send("test");
});s
router.post("/register", (req, res, next) => {
  console.log("register");
  // res.send("register return");
  console.log(req.body);
  User.create(req.body)
    .then((user) => {
      console.log("then le");
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.post("/find", (req, res, next) => {
  console.log("find");
  console.log(req.body);
  User.find({ username: req.body.username })
    .then((user) => {
      console.log("find result", user);
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
