const router = require("express").Router();
const controller = require("./theaters.controller");

router
	.route("/")
	.get(controller.list);

module.exports = router;