const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;

const STEAM_KEY = "8A1619F45B111E68BFA876C08E5E5772";

passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:5173/auth/steam/return",
      realm: "http://localhost:5173/",
      apiKey: STEAM_KEY,
    },
    function (identifier, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
