"use strict";

const { Router } = require("express");
const postController = require("../controllers/post.controller");
const { asyncHandler } = require("../utils/asyncHandler.util");
const {
  authentication,
  checkPermission,
} = require("../middleware/auth.middleware");

const router = Router();

// auth
router.use(asyncHandler(authentication));

router
  .route("/")
  .post(
    asyncHandler(checkPermission("post.add")),
    asyncHandler(postController.create)
  )
  .get(
    asyncHandler(checkPermission("post.view")),
    asyncHandler(postController.getAll)
  );

router
  .route("/:id")
  .get(
    asyncHandler(checkPermission("post.view")),
    asyncHandler(postController.getById)
  )
  .patch(
    asyncHandler(checkPermission("post.update")),
    asyncHandler(postController.update)
  )
  .delete(
    asyncHandler(checkPermission("post.delete")),
    asyncHandler(postController.delete)
  );

module.exports = router;
