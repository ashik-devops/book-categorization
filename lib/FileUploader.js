import { compareSync } from "bcryptjs";
import fs from "fs";
import prisma from "./Prisma";
import { validateUploadedFile } from "./Validator";
export async function saveUploadedFile(file, path = "", config = {}) {
  if (!validateUploadedFile(file)) {
    return false;
  }
  let newPath = process.env.LOCAL_FILE_UPLOAD_DIR + "/" + path + "/";
  let filename =
    file.name.slice(0, file.name.indexOf(".", -1)) +
    "~" +
    Date.now() +
    file.name.slice(file.name.indexOf(".", -1));

  try {
    if (!fs.existsSync(process.cwd() + newPath)) {
      fs.mkdirSync(process.cwd() + newPath, { recursive: true });
    }
    fs.copyFileSync(file.path, process.cwd() + newPath + filename);
    fs.unlinkSync(file.path);
    let fileData = await prisma.files.create({
      data: {
        name: file.name,
        filepath: newPath + filename,
        created_at: new Date(),
        ...config,
      },
    });
    return fileData;
  } catch (error) {
    console.log(error);
    if (fs.existsSync(process.cwd() + newPath + filename)) {
      fs.unlinkSync(process.cwd() + newPath + filename);
    }
  }
  return false;
}

export async function deleteUploadedFile(fileId) {
  await prisma.files.update({
    where: {
      id: fileId,
    },
    data: {
      deleted_at: new Date(),
    },
  });
}
