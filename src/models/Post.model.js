"use strict";

//-!dmbg
const mongoose = require("mongoose");

const DOCUMENT_NAME = "Post";
const COLLECTION_NAME = "Posts";

var PostSchema = new mongoose.Schema(
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
module.exports = mongoose.model(DOCUMENT_NAME, PostSchema);
