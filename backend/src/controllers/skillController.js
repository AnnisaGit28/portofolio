const skillModel = require("../models/skillModel");

const getSkills = (req, res) => {
    skillModel.getAllSkills((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data skill",
                error: err.message,
            });
        }

        res.json({
            success: true,
            message: "Data skill berhasil diambil",
            data: results,
        });
    });
};

const getSkillById = (req, res) => {
    const { id } = req.params;

    skillModel.getSkillById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil detail skill",
                error: err.message,
            });
        }

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Skill tidak ditemukan",
            });
        }

        res.json({
            success: true,
            message: "Detail skill berhasil diambil",
            data: result,
        });
    });
};

const createSkill = (req, res) => {
    const {
        skill_group_id,
        name,
        level,
        percentage
    } = req.body;

    if (!skill_group_id || !name || !level) {
        return res.status(400).json({
            success: false,
            message: "Field skill_group_id, name, dan level wajib diisi",
        });
    }

    const data = {
        skill_group_id,
        name,
        level,
        percentage: percentage || 0,
    };

    skillModel.createSkill(data, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal menambahkan skill",
                error: err.message,
            });
        }

        res.status(201).json({
            success: true,
            message: "Skill berhasil ditambahkan",
            data: {
                id: results.insertId,
                ...data,
            },
        });
    });
};

module.exports = {
    getSkills,
    getSkillById,
    createSkill,
};