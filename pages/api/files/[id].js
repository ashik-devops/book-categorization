import withAuth from "../../../middlewares/api/auth";
import ApiResponse from "../../../lib/ApiResponse";
import prisma from "../../../lib/Prisma";
import Occurences from "occurences";
let Sentiment = require("sentiment");
const pdf = require("pdf-parse");
const fs = require("fs");
let tm = require("textmining");
const occurences = require("occurences");
export default async function handler(req, res) {
  const _authUser = await withAuth(req, res);
  if (_authUser) {
    let result = null;
    let sentiment = new Sentiment();

    const file = await prisma.files.findFirst({
      where: {
        id: req.query.id,
      },
    });
    let newPath = process.cwd() + file.filepath;
    let dataBuffer = fs.readFileSync(newPath);
    let occuredPositive = null;
    var nn;

    pdf(dataBuffer).then(function (data) {
      aa(data);

      // console.log(occuredPositive.getSorted());
      // console.log(occuredNegative.getSorted());
    });
    function aa(data) {
      result = sentiment.analyze(data.text);
      occuredPositive = new Occurences(result.positive.join(" "));
      return occuredPositive;
    }
    if (nn !== null || typeof nn !== "undefined") {
      console.log(nn);
    }
    // if (file) {
    //   let occuredPositive = new Occurences(result.positive.join(" "));
    //   let occuredNegative = new Occurences(result.negative.join(" "));
    return ApiResponse(res, "occuredPositive.getSorted().slice(0, 12)", 200);
    // }

    return ApiResponse(res, { error: "error" }, 404);
  }
  return ApiResponse(res, { error: "error" }, 500);
}
