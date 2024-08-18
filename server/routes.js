const router = require("express").Router();
const { signup, login } = require("./controllers/AuthController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);


module.exports = router;