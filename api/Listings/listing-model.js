const db = require("../data/db-config");

module.exports = {
  addListing,
  getListings,
  getListingById,
  findBy,
  updateListing,
  removeListing,
};

function addListing(listing) {
  return db.select("*").from("listing").insert(listing);
}

function getListingById(listing_id) {
  return db.select("*").from("listing").where({ listing_id });
}

function getListings() {
  return db.select("*").from("listing");
}

function findBy(listing) {
  return db.select("*").from("listing").where(listing);
}

function updateListing(listing_id, changes) {
  return db.select("*").from("listing").where({ listing_id }).update(changes);
}

function removeListing(listing_id) {
  return db.select("*").from("listing").where({ listing_id }).del();
}
