const db = require("../config/db");

const getAllSkills = (callback) => {
    const query = `
    SELECT 
        skills.id,
        skills.skill_group_id,
        skills.name,
        skills.level,
        skills.percentage,
        skills.created_at,
        skill_groups.title AS group_title,
        skill_groups.icon AS group_icon
    FROM skills
    JOIN skill_groups 
        ON skills.skill_group_id = skill_groups.id
    ORDER BY skills.skill_group_id ASC, skills.id ASC
`;

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