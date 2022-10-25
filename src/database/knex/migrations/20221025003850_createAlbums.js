exports.up = function (knex) {
  return knex.schema.createTable("albums", (table) => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("name");
    table.boolean("isPublic");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("albums");
};
