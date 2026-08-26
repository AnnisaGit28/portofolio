const certificateModel = require("../models/certificateModel");

const getCertificates = (req, res) => {
    certificateModel.getAllCertificates((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data sertifikat",
                error: err.message,
            });
        }

        res.json({
            success: true,
            message: "Data sertifikat berhasil diambil",
            data: results,
        });
    });
};

const getCertificateById = (req, res) => {
    const { id } = req.params;

    certificateModel.getCertificateById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil detail sertifikat",
                error: err.message,
            });
        }

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Sertifikat tidak ditemukan",
            });
        }

        res.json({
            success: true,
            message: "Detail sertifikat berhasil diambil",
            data: result,
        });
    });
};

const createCertificate = (req, res) => {
    const {
        title,
        issuer,
        date,
        credential_id,
        verification_url
    } = req.body;

    if (!title || !issuer) {
        return res.status(400).json({
            success: false,
            message: "Field title dan issuer wajib diisi",
        });
    }

    const data = {
        title,
        issuer,
        date,
        credential_id,
        verification_url,
    };

    certificateModel.createCertificate(data, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal menambahkan sertifikat",
                error: err.message,
            });
        }

        res.status(201).json({
            success: true,
            message: "Sertifikat berhasil ditambahkan",
            data: {
                id: results.insertId,
                ...data,
            },
        });
    });
};

module.exports = {
    getCertificates,
    getCertificateById,
    createCertificate,
};