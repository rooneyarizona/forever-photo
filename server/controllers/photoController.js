const db = require("../models/db");

exports.getAllPhotos = (req, res) => {
  const photoQuery = `SELECT * FROM photos`;

  db.query(photoQuery, (err, results) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.message + "  and not working" });
    }
    res.send({ success: true, photos: results });
  });
};

exports.uploadPhoto = (req, res) => {
  const { userId, photoLocation, photoUrl } = req.body;

  // Query to check if user exists
  const checkUserQuery = `SELECT * FROM users WHERE userId = ?`;

  db.query(checkUserQuery, [userId], (err, userResult) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    if (userResult.length === 0) {
      // User does not exist
      return res.status(400).json({
        success: false,
        message: "User does not exist. Please create the user first.",
      });
    }

    // If user exists, proceed to upload the photo
    const uploadQuery = `INSERT INTO photos (userId, photoLocation, photoUrl) VALUES (?, ?, ?)`;

    db.query(uploadQuery, [userId, photoLocation, photoUrl], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: err.message });
      }

      res.json({ success: true, message: "Photo added!" });
    });
  });
};
