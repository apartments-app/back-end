const express = require("express");
const Listing = require("./listing-model");

const router = express.Router();

router.get("/", (req, res) => {
  Listing.getListings()
    .then((listings) => {
      res.status(200).json({ data: listings });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Could not fetch listings", error: err.message });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  Listing.addListing(data)
    .then((listing) => {
      res.status(200).json({ data: listing });
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add", error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Listing.updateListing(id, changes)
    .then((listing) => {
      if (listing) {
        res.status(200).json({ listing });
      } else {
        res
          .status(404)
          .json({ error: "Please provide the right listing information" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "There was an error updating", error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Listing.removeListing(id)
    .then((listing) => {
      if (listing) {
        res.status(200).json({ data: listing, message: "listing deleted" });
      } else {
        res.status(404).json({ error: "please provide the correct id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting the listing" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Listing.getListingById(id)
    .then((listing) => {
      res.status(200).json({ listing });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
