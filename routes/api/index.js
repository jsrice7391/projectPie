const router = require("express").Router();
const ProjectRoutes = require("./project");

// Item routes
router.use("/project", ProjectRoutes);

module.exports = router;
