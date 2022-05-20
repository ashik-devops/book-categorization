import prisma from "../../lib/Prisma";

export default async function withApiAuth(req, res) {
  const clientId = req.headers["kl-client-app-id"];
  const token = req.headers["kl-client-app-key"];
  // const _origin = req.headers["origin"];
  if (clientId && token) {
    console.log( {
            id: clientId,

            public_key: token,

            status: "ACTIVE",

          });
    const app = await prisma.app.findFirst({
      where: {
        AND: [
          {
            id: clientId,

            public_key: token,

            status: "ACTIVE",

          },
        ],
      },
    });
    console.log(app);
    return app ? app : false;
  }
  return false;
}
