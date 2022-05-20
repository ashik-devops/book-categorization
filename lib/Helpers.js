const cleanDirPath = (path) => {
  return path.replace("//", "/");
};

function hasNumber(myString) {
  return /\d/.test(myString);
}
module.exports = { cleanDirPath, hasNumber };
