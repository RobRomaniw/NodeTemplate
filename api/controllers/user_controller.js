"use strict";

const mongoose = require("mongoose"),
  User = mongoose.model("User"),
  passport = require("passport"),
  CONST = require("../components/CONST");

exports.addUser = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    imageId: req.body.imageId
  });

  User.count(
    {
      username: user.username
    },
    (err, count) => {
      if (err) {
        return done(err);
      }
      if (count === 0) {
        user.save(err => {
          if (err) {
            return next(err);
          }
          res.sendStatus(CONST.HTTP_STATUS_CODE.CREATED);
        });
      } else {
        res
          .status(CONST.HTTP_STATUS_CODE.BAD_REQUEST)
          .send("username already exists!!");
      }
    }
  );
};

exports.login = (req, res, next) => {
  passport.authenticate("local", function(err, user) {
    if (err) {
      return next(err);
    } else {
      if (!user) {
        return next({
          status: CONST.HTTP_STATUS_CODE.UNAUTHENTICATED,
          error: {
            success: false,
            message: CONST.SIGNALS.AUTH_FAILED
          }
        });
      } else {
        req.login(user, function(err) {
          if (err) {
            next(err);
          } else {
            res.send({ success: true, message: CONST.SIGNALS.AUTH_SUCCESS });
          }
        });
      }
    }
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(CONST.HTTP_STATUS_CODE.SERVER_ERROR).send(err);
    } else {
      res.status(CONST.HTTP_STATUS_CODE.OK).end();
    }
  });
  req.logout();
};
