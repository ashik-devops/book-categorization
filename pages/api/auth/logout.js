// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcryptjs";
import prisma from "../../../lib/Prisma";
import jwt from "jsonwebtoken";
import moment from "moment";
import ApiResponse from "../../../lib/ApiResponse";
import withAuth from "../../../middlewares/api/auth";
export default async function handler(req, res, next) {
  const _authUser = await withAuth(req, res);

  if (_authUser) {
    const _token = req.headers["x-clx-auth"];
    prisma.token.delete({
      where: {
        token: _token,
      },
    });
  }
  return ApiResponse(res, { success: "Logged Out" }, 200);
}
