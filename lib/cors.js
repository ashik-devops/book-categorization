import prisma from "./Prisma";
import Cors from "cors";
import initMiddleware from "../middlewares/api/initMiddleware";

var corsOptions = {
  methods: ["PUT", "POST", "PATCH", "OPTIONS", "GET"],
  origin: "dokume.net",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// async function loadOrigins() {
//   return await prisma.app.findMany({
//     select: {
//       app_domain: true,
//     },
//     where: {
//       status: "ACTIVE",
//     },
//   });
// }
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    //   origin: function (origin, callback) {},
    ...corsOptions,
  })
);

export default cors;
