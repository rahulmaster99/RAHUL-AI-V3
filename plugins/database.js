const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./warnings.db');

// Create the table with a UNIQUE constraint on (userId, groupId)
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS warnings (
        userId TEXT NOT NULL,
        groupId TEXT NOT NULL,
        count INTEGER DEFAULT 0,
        PRIMARY KEY (userId, groupId) -- Set both as a composite PRIMARY KEY
    )`);
});

// Function to get warning count
const getWarnings = (userId, groupId) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT count FROM warnings WHERE userId = ? AND groupId = ?`, [userId, groupId], (err, row) => {
            if (err) reject(err);
            else resolve(row ? row.count : 0);
        });
    });
};

// Function to add or update warning
const addWarning = (userId, groupId) => {
    return new Promise((resolve, reject) => {
        db.run(`
            INSERT INTO warnings (userId, groupId, count)
            VALUES (?, ?, 1)
            ON CONFLICT(userId, groupId) DO UPDATE SET count = count + 1;
        `, [userId, groupId], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

// Function to reset warnings after removal
const resetWarnings = (userId, groupId) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM warnings WHERE userId = ? AND groupId = ?`, [userId, groupId], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

module.exports = {
    getWarnings,
    addWarning,
    resetWarnings
};