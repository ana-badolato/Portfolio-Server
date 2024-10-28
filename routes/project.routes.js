const express = require("express");
const router = express.Router();
const Project = require("../models/Project.model");

//* GET -----------------------------------------------------
// GET /api/project/ -> returns an array of all projects
router.get("/", async(req, res, next) => {
  try {
    const response = await Project.find()
    res.status(200).json(response);
  }
  catch (error){
    next(error)
  };
});

// GET /api/project/featured -> returns an array of all featured projects
router.get("/featured", async (req, res, next) => {
  try {
    const featuredProjects = await Project.find({ featured: true });
    res.status(200).json(featuredProjects);
  } catch (error) {
    next(error);
  }
});

// GET /api/project/not-featured -> returns an array of all non-featured projects
router.get("/not-featured", async (req, res, next) => {
  try {
    const nonFeaturedProjects = await Project.find({ featured: false });
    res.status(200).json(nonFeaturedProjects);
  } catch (error) {
    next(error);
  }
});

//* PUT ------------------------------------------------------
// PUT /api/project/:projectid -> update the details of a project
router.put("/:projectid", async(req, res, next) => {
  try {
    const response = await Project.findByIdAndUpdate(req.params.projectid,{
      title: req.body.title,
      resume: req.body.resume,
      description: req.body.description,
      category: req.body.category,
      skills: req.body.skills,
      linkWeb: req.body.linkWeb,
      linkGit: req.body.linkGit,
      img: req.body.img.Project,
      featured: req.body.featured
    }, {new: true})
    res.status(201).json(response)
  } catch (error) {
    next(error)
  }
})


//* POST ---------------------------------------------------
// POST /api/project/ -> create new project
router.post("/", async(req, res, next) => {
  try {
    const response = await Project.create({
      title: req.body.title,
      resume: req.body.resume,
      description: req.body.description,
      category: req.body.category,
      skills: req.body.skills,
      linkWeb: req.body.linkWeb,
      linkGit: req.body.linkGit,
      img: req.body.img.Project,
      featured: req.body.featured
    })
    res.status(201).json(response)
  } catch (error) {
    next(error)
  }
})

//* DELETE ----------------------------------------------------
// DELETE  /api/project/:projectid -> delete a project you own
router.delete("/:projectid", async(req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.projectid)
    res.sendStatus(202)
  }catch(error){
    next(error)
  }
})



module.exports = router;