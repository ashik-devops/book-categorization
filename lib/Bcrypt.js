import bcrypt from "bcryptjs";
import { has } from "browser-sync";
const generatePassword = async function (textPassword) {
  let salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(textPassword, salt);
};

const comparePassword = async function (textPassword, hash) {
  return await bcrypt.compare(textPassword, hash);
};

export { generatePassword, comparePassword };
