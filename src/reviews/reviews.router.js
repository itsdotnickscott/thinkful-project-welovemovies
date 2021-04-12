const router = require("express").Router();
const controller = require("./reviews.controller");

router
	.route("/:reviewId")
	.delete(controller.delete)
	.put(controller.update);

router
	.route("/")
	.get(controller.readReviews);

module.exports = router;