import withAuth from "../../../middlewares/api/auth";
import ApiResponse from "../../../lib/ApiResponse";
import prisma from "../../../lib/Prisma";
export default async function handler(req, res) {
  const _authUser = await withAuth(req, res);
  if (_authUser) {
    console.log("inside load files");
    const files = await prisma.files.findMany();

    if (files) {
      console.log(files);
      return ApiResponse(res, { files: files }, 200);
    }

    return ApiResponse(res, { error: "error" }, 404);
  }
  return ApiResponse(res, { error: "error" }, 500);
}
