const express = require("express");
const Listing = require("./listing-model");
const restricted = require("../middleware/restricted");

const router = express.Router();

router.use(restricted);

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

router.put("/:listing_id", (req, res) => {
  const changes = req.body;
  const { listing_id } = req.params;

  Listing.updateListing(listing_id, changes)
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

router.delete("/:listing_id", (req, res) => {
  const { id } = req.params;

  Listing.removeListing(listing_id)
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

router.get("/:listing_id", (req, res) => {
  const { listing_id } = req.params;
  Listing.getListingById(listing_id)
    .then((listing) => {
      res.status(200).json({ listing });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
