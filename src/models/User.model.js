"use strict";

//-!dmbg
const mongoose = require("mongoose");
const { hashPassword } = require("../utils/hash.util");

const DOCUMENT_NAME = "User";
const COLLECTION_NAME = "Users";

var UserSchema = new mongoose.Schema(
  {
    display_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [mongoose.Types.ObjectId],
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

UserSchema.pre("save", async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, UserSchema);
