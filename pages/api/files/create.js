import withAuth from "../../../../middlewares/api/auth";
import ApiResponse from "../../../lib/ApiResponse";
import prisma from "../../../../../lib/Prisma";
import { IncomingForm } from "formidable-serverless";
import {
  getFileExtention,
  saveUploadedFile,
  validateUploadedFile,
} from "../../../../../lib/FileUploader";
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
    let caseData = await prisma.case.findFirst({
      where: {
        id: req.query.id,
      },
    });
    if (caseData.id) {
      const form = new IncomingForm();
      form.keepExtensions = true;

      return form.parse(req, async (err, fields, files) => {
        if (err) {
          return ApiResponse(res, { error: "error" }, 500);
        }
        if (files.uploadable_file) {
          let uploadedFile = await saveUploadedFile(
            files.uploadable_file,
            "case_files/" + req.query.id,
            {
              obj_type: "CASE",
              obj_id: caseData.id,
              created_by: {
                connect: {
                  id: _authUser.id,
                },
              },
            }
          );
          if (uploadedFile) {
            await prisma.caseLogs.create({
              data: {
                case: {
                  connect: {
                    id: caseData.id,
                  },
                },
                message:
                  [_authUser.first_name, _authUser.last_name].join(" ") +
                  " uploaded file:  " +
                  files.uploadable_file.name +
                  ".",
                created_by: {
                  connect: {
                    id: _authUser.id,
                  },
                },
              },
            });
            return ApiResponse(res, { file: uploadedFile }, 201);
          } else {
            return ApiResponse(res, { error: "failed to save" }, 400);
          }
        }
        return ApiResponse(res, { error: "error" }, 422);
      });
    }
    return ApiResponse(res, { error: "error" }, 404);
  }
  return ApiResponse(res, { error: "error" }, 403);
}
