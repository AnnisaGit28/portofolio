const testimonialModel = require("../models/testimonialModel");

const getTestimonials = (req, res) => {
    testimonialModel.getAllTestimonials((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data testimoni",
                error: err.message,
            });
        }

        res.json({
            success: true,
            message: "Data testimoni berhasil diambil",
            data: results,
        });
    });
};

const createTestimonial = (req, res) => {
    const { name, role, company, avatar, stars, quote } = req.body;

    const data = {
        name,
        role,
        company,
        avatar,
        stars,
        quote,
    };

    testimonialModel.createTestimonial(data, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal menambahkan testimoni",
                error: err.message,
            });
        }

        res.status(201).json({
            success: true,
            message: "Testimoni berhasil ditambahkan",
            data: {
                id: results.insertId,
                ...data,
            },
        });
    });
};

const getTestimonialById = (req, res) => {
    const { id } = req.params;

    testimonialModel.getTestimonialById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil detail testimoni",
                error: err.message,
            });
        }

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Testimoni tidak ditemukan",
            });
        }

        res.json({
            success: true,
            message: "Detail testimoni berhasil diambil",
            data: result,
        });
    });
};

module.exports = {
    getTestimonials,
    createTestimonial,
    getTestimonialById,
};