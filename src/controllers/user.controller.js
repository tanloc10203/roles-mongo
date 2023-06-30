"use strict";

const userService = require("../services/user.service");
const { CreatedResponse, OKResponse } = require("../utils/success.util");

module.exports = {
  async create(req, res) {
    const body = req.body;
    return new CreatedResponse({
      message: "Create user success",
      metadata: await userService.add(body),
    }).send(res);
  },
  async getAll(req, res) {
    const filters = req.query;
    return new OKResponse({
      message: "Get user success",
      metadata: await userService.getAll(filters),
    }).send(res);
  },
  async getById(req, res) {
    const id = req.params.id;
    return new OKResponse({
      message: "Get user id success",
      metadata: await userService.getById(id),
    }).send(res);
  },
  async delete(req, res) {
    const id = req.params.id;
    return new OKResponse({
      message: "Delete user id success",
      metadata: await userService.delete(id),
    }).send(res);
  },
  async update(req, res) {
    const id = req.params.id;
    const body = req.body;
    return new OKResponse({
      message: "Update user id success",
      metadata: await userService.update(id, body),
    }).send(res);
  },
};
