const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:5173/";
console.log("router bn", router);
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      // cookies:req.cookies
    });
  }
});
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});
router.get("/logout", (req, res) => {
  req.logout();
  req.redirect(CLIENT_URL);
});

router.get("/steam", passport.authenticate("steam", { scope: ["profile"] }));

router.get(
  "/steam/auth",
  passport.authenticate("steam", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
