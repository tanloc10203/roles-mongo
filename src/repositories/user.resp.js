"use strict";

const { default: mongoose } = require("mongoose");
const UserModel = require("../models/User.model");

exports.findUserByUsername = async (username) => {
  return await UserModel.findOne({ username }).lean();
};

exports.saveUser = async ({ display_name, username, password, roles }) => {
  return await UserModel({
    display_name,
    username,
    password,
    roles,
  }).save();
};

exports.findUserById = async (id) => {
  return await UserModel.findById(new mongoose.Types.ObjectId(id)).lean();
};

exports.findOneAndUpdateUser = async (id, data) => {
  return await UserModel.findOneAndUpdate(
    {
      _id: new mongoose.Types.ObjectId(id),
    },
    { $set: data },
    { new: true }
  ).lean();
};

exports.findAllUser = async () => {
  return await UserModel.find().lean();
};
