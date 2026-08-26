const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

router.get("/api/skills", skillController.getSkills);

router.get("/api/skills/:id", skillController.getSkillById);

router.post("/api/skills", skillController.createSkill);

module.exports = router;
