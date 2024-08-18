const router = require("express").Router();
const { signup, login, checkAuth } = require("./controllers/AuthController");
const verifyToken = require('./middlewares/verifyToken')

router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);


module.exports = router;