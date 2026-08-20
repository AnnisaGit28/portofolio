const express = require("express");
const router = express.Router();

router.get("/api/hero", (req, res) => {
    res.json({
        nama: "Nur Annisa Anwar",
        peran: "Fullstack Web Developer",
        deskrpsi: "Saya adalah siswa XII RPL 1 yang sedang belajar memnuat aplikasi web menggunakan Express.js dan Next.js"
    });
});

module.exports = router;
