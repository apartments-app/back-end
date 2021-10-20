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

async function getListings() {
  const listing = await db("listing");
  const image = await db("image");
  const images = listing.map((each) => {
    each.image_url = image.filter((id) => id.listing_id === each.listing_id);
    return each;
  });
  return images;
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
