exports.seed = function (knex) {
  return knex("image")
    .del()
    .then(function () {
      return knex("image").insert([
        {
          listing_id: 1,
          image_url:
            "https://apartmates.s3.amazonaws.com/b92d15e6-e1cb-4d88-939f-4bfbdf54cba7",
        },
      ]);
    });
};
