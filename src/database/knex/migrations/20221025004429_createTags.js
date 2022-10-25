exports.up = function (knex) {
  return knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("page_id")
      .references("id")
      .inTable("albums")
      .onDelete("CASCADE");
    table.text("name");
    table.timestamp("created_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tags");
};
