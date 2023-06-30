"use strict";

const { Router } = require("express");
const userController = require("../controllers/user.controller");
const { asyncHandler } = require("../utils/asyncHandler.util");
const { UserSchemaInput } = require("../schema/user.schema");
const { validateResource } = require("../middleware/request.middleware");

const router = Router();

router
  .route("/")
  .post(validateResource(UserSchemaInput), asyncHandler(userController.create))
  .get(asyncHandler(userController.getAll));

router
  .route("/:id")
  .get(asyncHandler(userController.getById))
  .patch(asyncHandler(userController.update))
  .delete(asyncHandler(userController.delete));

module.exports = router;
