"use strict";

const { Router } = require("express");

const router = Router();

router.use("/api/v1/permissions", require("./permission.route"));
router.use("/api/v1/roles", require("./role.route"));
router.use("/api/v1/users", require("./user.route"));
router.use("/api/v1/posts", require("./post.route"));

module.exports = router;
