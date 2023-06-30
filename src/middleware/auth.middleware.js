"use strict";

const { default: mongoose } = require("mongoose");
const userService = require("../services/user.service");
const {
  UnauthorizedRequestError,
  ForbiddenRequestError,
} = require("../utils/error.util");

const Headers = {
  CLIENT_ID: "x-client-id",
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const authentication = async (req, res, next) => {
  const clientId = req.headers[Headers.CLIENT_ID];

  if (!clientId) {
    throw new UnauthorizedRequestError(
      `Missing headers \`${Headers.CLIENT_ID}\``
    );
  }

  if (!mongoose.isValidObjectId(clientId)) {
    throw new UnauthorizedRequestError(`\`${Headers.CLIENT_ID}\` unvalid`);
  }

  const user = await userService.getById(clientId);

  if (!user) {
    throw new UnauthorizedRequestError(`Plz register`);
  }

  req.userRoles = user.roles;

  next();
};

const checkPermission = (permission) => async (req, res, next) => {
  const roles = req.userRoles;

  if (!Array.isArray(roles) || (Array.isArray(roles) && !roles.length)) {
    throw new ForbiddenRequestError("Not allowed!");
  }

  roles.map((role) =>
    role.permissions.map((p) => {
      if (p.alias === permission) {
        return next();
      }
    })
  );

  throw new ForbiddenRequestError("Not allowed!");
};

module.exports = {
  authentication,
  checkPermission,
};
