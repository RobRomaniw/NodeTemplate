"use strict";

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  User = require("../models/User");

module.exports = app => {
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id)
      .then(user => {
        cb(null, user);
      })
      .catch(err => {
        return cb(err);
      });
  });

  const localStrategy = new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(null, false);
        }

        return user.validatePassword(password).then(isMatch => {
          if (!isMatch) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        });
      })
      .catch(error => {
        return done(error);
      });
  });

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(localStrategy);
};
