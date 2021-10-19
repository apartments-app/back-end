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

function getListingById(id) {
  return db.select("*").from("listing").where({ id });
}

function getListings() {
  return db.select("*").from("listing");
}

function findBy(listing) {
  return db.select("*").from("listing").where(listing);
}

function updateListing(id, changes) {
  return db.select("*").from("listing").where({ id }).update(changes);
}

function removeListing(id) {
  return db.select("*").from("listing").where({ id }).del();
}
