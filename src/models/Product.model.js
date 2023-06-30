"use strict";

//-!dmbg
const mongoose = require("mongoose");

const DOCUMENT_NAME = "Product";
const COLLECTION_NAME = "Products";

var ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, ProductSchema);
