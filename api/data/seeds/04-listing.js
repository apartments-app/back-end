exports.seed = function (knex) {
  return knex("listing").insert([
    {
      user_id: 1,
      location: "New York, NY",
      price: "$2,000 per month",
      number_of_beds: "2",
      number_of_baths: "1.5",
      apartment_or_home: "apartment",
      move_in_date: "11/01/2021",
      square_feet: "1,500",
      max_number_of_people: 6,
      tenant_rules: "No smoking indoors. Pets allowed.",
    },
    {
      user_id: 2,
      location: "San Diego, CA",
      price: "$3,000 per month",
      number_of_beds: "3",
      number_of_baths: "2.5",
      apartment_or_home: "home",
      move_in_date: "12/01/2021",
      square_feet: "2,500",
      max_number_of_people: 10,
      tenant_rules: "Pets allowed.",
    },
  ]);
};

