const db = require("../models/db");

exports.addUser = (req, res) => {
  const { firstName, lastName, emailAddress, dateCreated } = req.body;
  const sql = `INSERT INTO users(firstName, lastName, email, dateCreated) VALUES (?, ?, ?, ?)`;

  db.query(sql, [firstName, lastName, emailAddress, dateCreated], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
    res.json({
      success: true,
      message: "User information saved successfully!",
    });
  });
};

exports.getAllUsers = (req, res) => {
    const photoQuery = `SELECT * FROM users`;
  
    db.query(photoQuery, (err, results) => {
      if (err) {
        return res.status(500).send({ success: false, message: err.message + "  and not working" });
      }
      res.send({ success: true, users: results });
    });
  };