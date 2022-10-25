exports.up = function (knex) {
  return knex.schema.createTable("pages", (table) => {
    table.increments("id");
    table
      .integer("album_id")
      .references("id")
      .inTable("albums")
      .onDelete("CASCADE");
    table.text("title");
    table.text("description");
    table.timestamp("date");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pages");
};
