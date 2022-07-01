import withAuth from "../../../middlewares/api/auth";
import ApiResponse from "../../../lib/ApiResponse";
import prisma from "../../../lib/Prisma";
import Occurences from "occurences";
let Sentiment = require("sentiment");
const pdf = require("pdf-parse");
const fs = require("fs");
let tm = require("textmining");
const occurences = require("occurences");
const { Classifier } = require("ml-classify-text");

export default async function handler(req, res, next) {
  const _authUser = await withAuth(req, res);
  if (_authUser) {
    const classifier = new Classifier();
    let result = null;
    let sentiment = new Sentiment();

    const file = await prisma.files.findFirst({
      where: {
        id: req.query.id,
      },
    });
    let newPath = process.cwd() + file.filepath;
    let dataBuffer = fs.readFileSync(newPath);
    let occuredMix = [];
    let occuredPositive = null;
    let occuredNegative = null;

    const pdfData = pdf(dataBuffer).then(function (data) {
      result = sentiment.analyze(data.text);
      classifier.train(data.text, "Romantic");
      let model = classifier.model;

      console.log(model.serialize());
      occuredPositive = new Occurences(result.positive.join(" "));
      occuredNegative = new Occurences(result.negative.join(" "));
      occuredMix.push(occuredPositive.getSorted().slice(0, 12));
      occuredMix.push(occuredNegative.getSorted().slice(0, 12));
      occuredMix.push(data.text);
      return occuredMix;
    });

    if (file) {
      const resp = await Promise.resolve(pdfData);
      return ApiResponse(res, occuredMix, 200);
    }

    return ApiResponse(res, { error: "error" }, 404);
  }
  return ApiResponse(res, { error: "error" }, 500);
}
