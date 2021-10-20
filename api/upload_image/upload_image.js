const express = require("express");
const router = express.Router();
const upload = require("./fileupload");
const singleUpload = upload.single("image");
const Upload = require("./upload_image-model");
const restricted = require("../middleware/restricted");
const axios = require("axios");

router.post("/", restricted, (req, res) => {
  singleUpload(req, res, async (err) => {
    if (req.file.key) {
      res.json({ image_location: req.file.location });
    } else {
      res.status(400).json(err.message);
    }
  });
});

module.exports = router;
