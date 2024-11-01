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
