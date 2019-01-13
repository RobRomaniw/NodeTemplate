"use strict";
let mongoose = require("mongoose"),
  bcrypt = require("bcrypt");

var UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  deactivated: Boolean,
  email: String,
  firstname: String,
  lastname: String,
  roles: [String],
  imageId: String
});

const SALT_ROUNDS = 10;

UserSchema.pre("save", function(next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.validatePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return reject(err);
      resolve(isMatch);
    });
  });
};

UserSchema.statics.getUserByID = function(id) {
  return new Promise((resolve, reject) => {
    this.findOne(
      {
        _id: id
      },
      function(err, user) {
        if (err) {
          return reject(err);
        }

        return resolve(user);
      }
    );
  });
};

UserSchema.set("toJSON", {
  transform: function(doc, ret, options) {
    var retJson = {
      _id: ret._id,
      username: ret.username,
      firstname: ret.firstname,
      lastname: ret.lastname,
      imageId: ret.imageId
    };
    return retJson;
  }
});

module.exports = mongoose.model("User", UserSchema);
