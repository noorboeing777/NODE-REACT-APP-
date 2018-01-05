const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const user = require("../models/Users");
//f
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  user.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      user.findOne({ googleId: profile.id }).then(existingUser => {
        console.log(profile);
        if (existingUser) {
          done(null, existingUser);
        } else {
          new user({
            googleId: profile.id,
            name: profile.displayName
          })
            .save()

            .then(user => done(null, user));
          console.log(user);
        }
      });
    }
  )
);
