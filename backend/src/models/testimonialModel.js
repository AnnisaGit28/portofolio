const db = require("../config/db");

const getAllTestimonials = (callback) => {
    const query = "SELECT * FROM testimonials ORDER BY created_at DESC";

    db.query(query, (err, results) => {
        callback(err, results);
    });
};

const createTestimonial = (data, callback) => {
    const query = `
        INSERT INTO testimonials
        (name, role, company, avatar, stars, quote)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        query,
        [
            data.name,
            data.role,
            data.company,
            data.avatar,
            data.stars,
            data.quote,
        ],
        (err, results) => {
            callback(err, results);
        }
    );
};

const getTestimonialById = (id, callback) => {
    const query = "SELECT * FROM testimonials WHERE id = ?";

    db.query(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results[0]);
    });
};

module.exports = {
    getAllTestimonials,
    createTestimonial,
    getTestimonialById,
};