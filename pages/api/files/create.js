import withAuth from "../../../middlewares/api/auth";
import ApiResponse from "../../../lib/ApiResponse";
import { IncomingForm } from "formidable-serverless";
import {
  getFileExtention,
  saveUploadedFile,
  validateUploadedFile,
} from "../../../lib/FileUploader";
// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  const _authUser = await withAuth(req, res);
  if (_authUser) {
    const form = new IncomingForm();
    form.keepExtensions = true;
    console.log(form);

    return form.parse(req, async (err, fields, files) => {
      if (err) {
        return ApiResponse(res, { error: "error" }, 500);
      }
      if (files.uploadable_file) {
        let uploadedFile = await saveUploadedFile(
          files.uploadable_file,
          "case_files/",
          {
            obj_type: "BOOK",
            created_by: {
              connect: {
                id: _authUser.id,
              },
            },
          }
        );
        if (uploadedFile) {
          return ApiResponse(res, { file: uploadedFile }, 201);
        } else {
          return ApiResponse(res, { error: "failed to save" }, 400);
        }
      }
      return ApiResponse(res, { error: "error" }, 422);
    });

    return ApiResponse(res, { error: "error" }, 404);
  }
  return ApiResponse(res, { error: "error" }, 403);
}
