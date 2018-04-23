const router = require("express").Router();
const projectController = require("../../controllers/projectController")
// Matches with "/api/items"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.createOne);

// Matches with "/api/items/:id"
router.route("/:projectTitle")
  .get(projectController.findOne)

module.exports = router;
