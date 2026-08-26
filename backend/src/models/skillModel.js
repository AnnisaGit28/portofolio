const db = require("../config/db");

const getAllSkills = (callback) => {
    const query = "SELECT * FROM skills ORDER BY created_at DESC";

    db.query(query, (err, results) => {
        callback(err, results);
    });
};

const getSkillById = (id, callback) => {
    const query = "SELECT * FROM skills WHERE id = ?";

    db.query(query, [id], (err, results) => {
        callback(err, results[0]);
    });
};

const createSkill = (data, callback) => {
    const query = `
        INSERT INTO skills
        (skill_group_id, name, level, percentage)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            data.skill_group_id,
            data.name,
            data.level,
            data.percentage
        ],
        (err, results) => {
            callback(err, results);
        }
    );
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
};