"use strict";

const { CreatedResponse, OKResponse } = require("../utils/success.util");

module.exports = {
  async create(req, res) {
    const body = req.body;
    return new CreatedResponse({
      message: "Create post success",
      metadata: "",
    }).send(res);
  },
  async getAll(req, res) {
    const filters = req.query;
    return new OKResponse({
      message: "Get post success",
      metadata: "",
    }).send(res);
  },
  async getById(req, res) {
    const id = req.params.id;
    return new OKResponse({
      message: "Get post id success",
      metadata: "",
    }).send(res);
  },
  async delete(req, res) {
    const id = req.params.id;
    return new OKResponse({
      message: "Delete post id success",
      metadata: "",
    }).send(res);
  },
  async update(req, res) {
    const id = req.params.id;
    const body = req.body;
    return new OKResponse({
      message: "Update post id success",
      metadata: "",
    }).send(res);
  },
};
