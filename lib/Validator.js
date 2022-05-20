import {
  allowedFileTypes,
  allowedMimeTypes,
  maxFileSize,
} from "../constants/FileUploader";
import mime from "mime";

function getFileExtention(filename) {
  return filename && filename.split(".").pop().toLowerCase();
}

export function validateUploadedFile(file) {
  //validate file type
  const fileExtension = getFileExtention(file.name);
  const fileMimeType = mime.lookup(file.path);
  //validate file size
  return (
    file.size <= maxFileSize &&
    allowedMimeTypes.includes(fileMimeType) &&
    allowedFileTypes.includes(fileExtension)
  );
}
