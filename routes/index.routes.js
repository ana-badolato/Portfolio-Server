const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const projectRouter = require("./project.routes")
router.use("/project", projectRouter)

module.exports = router;
