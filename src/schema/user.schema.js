"use strict";

const { object, string } = require("zod");

const UserSchemaInput = object({
  body: object({
    display_name: string({
      required_error: "Tên Hiển thị là trường bắt buộc",
    }),
    username: string({
      required_error: "Tài khoản là trường bắt buộc",
    }),
    password: string({
      required_error: "Mật khẩu là trường bắt buộc",
    }),
    roles: string({
      required_error: "Vai trò là 1 array bắt buộc",
    })
      .array()
      .nonempty({
        message: "Vai trò là 1 array không rỗng.",
      }),
  }),
});

module.exports = {
  UserSchemaInput,
};
