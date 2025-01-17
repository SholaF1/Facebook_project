const express = require("express");
const tokenChecker = require("../middleware/tokenChecker");
const emailValidator = require("../middleware/emailValidator")

const UsersController = require("../controllers/users");

const router = express.Router();

router.get('/', UsersController.getUsers)
router.post("/", emailValidator, UsersController.createUser);
router.delete("/:id", tokenChecker, UsersController.deleteUser);
router.put("/:id", tokenChecker, UsersController.updateUser);
router.get("/:id", tokenChecker, UsersController.findUser);

module.exports = router;
