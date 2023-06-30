"use strict";

const {
  findUserByUsername,
  saveUser,
  findUserById,
  findOneAndUpdateUser,
  findAllUser,
} = require("../repositories/user.resp");
const { ConflictRequestError } = require("../utils/error.util");
const roleService = require("./role.service");

const userService = {
  add: async ({ display_name, username, password, roles }) => {
    if (await findUserByUsername(username)) {
      throw new ConflictRequestError("Username exists");
    }

    return await saveUser({ display_name, username, password, roles });
  },
  getAll: async (filters = {}) => {
    const users = await findAllUser();

    return await Promise.all(
      users.map(
        (u) =>
          new Promise(async (resolve, reject) => {
            try {
              resolve(await userService.getById(u._id));
            } catch (error) {
              reject(error);
            }
          })
      )
    );
  },
  getById: async (id) => {
    let user = await findUserById(id);

    let roles = user.roles.map(
      (r) =>
        new Promise(async (resolve, reject) => {
          try {
            resolve(await roleService.getById(r));
          } catch (error) {
            reject(error);
          }
        })
    );

    roles = await Promise.all(roles);

    return { ...user, roles };
  },
  delete: async (id) => {
    // return await RoleModel.find().lean();
    return true;
  },
  update: async (id, data) => {
    if (data.username) {
      let user = await findUserByUsername(username);

      if (user && id !== user._id.toString()) {
        throw new ConflictRequestError("Username exists");
      }
    }

    return await findOneAndUpdateUser(id, data);
  },
};

module.exports = userService;
