const router = require("express").Router();
const controller = require("./movies.controller");
const theatersRouter = require("../theaters/theaters.router");
const reviewsRouter = require("../reviews/reviews.router");

router.use("/:movieId/theaters", controller.validateMovieId, theatersRouter);
router.use("/:movieId/reviews", controller.validateMovieId, reviewsRouter);

router
	.route("/")
	.get(controller.list);

router
	.route("/:movieId")
	.get(controller.read);

module.exports = router;