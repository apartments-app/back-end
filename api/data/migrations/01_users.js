exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("email", 200).notNullable();
    users.string("password", 200).notNullable();
    users.integer("role", 2).notNullable();
    users.string("first_name", 200).notNullable();
    users.string("last_name", 200).notNullable();
    users.string("birthday", 200).notNullable();
    users.string("phone", 50).notNullable();
    users.string("bio", 1000).notNullable();
    users.string("img", 400);
    users.string("address", 200);
    users.integer("zip", 10);
    users.string("state", 2);
    users.string("city", 200);
    users.integer("phone", 20);
    users.timestamps(false, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users");
};
