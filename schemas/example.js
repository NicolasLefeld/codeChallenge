const mongoose = require('mongoose');

const schemaName = new mongoose.Schema(
  {
    // Body schema
  }, { collection: "Collection name (Try to use env vars! - process.env.VARNAME)" },
);

module.exports.schemaName = mongoose.model('schemaModel', schemaName);
