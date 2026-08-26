const express = require("express");
const router = express.Router();
const testimonialController = require("../controllers/testimonialController")

router.get("/api/testimonials", testimonialController.getTestimonials);

router.post("/api/testimonials", testimonialController.createTestimonial);
router.get("/api/testimonials/:id", testimonialController.getTestimonialById);

module.exports = router;
