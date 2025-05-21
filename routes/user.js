const { Router } = require("express");
const {
  handleUserSignin,
  handleUserSignup,
  handleUserLogout,
} = require("../controllers/user");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", handleUserSignin);

router.post("/signup", handleUserSignup);

router.get("/logout", handleUserLogout);

module.exports = router;
