exports.up = async (knex) => {
  await knex.schema.createTable("listing", (listing) => {
    listing.integer("user_id").unsigned().notNullable();
    listing.string("location", 30).notNullable();
    listing.string("price", 50).notNullable();
    listing.string("number_of_beds", 10).notNullable();
    listing.string("number_of_baths", 10).notNullable();
    listing.string("apartment_or_home", 30).notNullable();
    listing.string("move_in_date", 30).notNullable();
    listing.string("square_feet", 20).notNullable();
    listing.integer("max_number_of_people", 10).notNullable();
    listing.string("tenant_rules", 200).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("listing");
};
