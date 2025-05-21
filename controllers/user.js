const User = require("../models/user");

async function handleUserSignin(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", { error: "Incorrect Email or Password" });
  }
}

async function handleUserSignup(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
}

function handleUserLogout(req, res) {
  res.clearCookie("token").redirect("/");
}

module.exports = {
  handleUserSignin,
  handleUserSignup,
  handleUserLogout,
};
