exports.up = async (knex) => {
  await knex.schema.createTable("image", (image) => {
    image.increments("image_id");
    image.integer("listing_id").notNullable();
    image.string("image_url", 1000).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("image");
};
