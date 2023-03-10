const { register } = require("../controllers/userControllers");
const { login } = require("../controllers/userControllers");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
