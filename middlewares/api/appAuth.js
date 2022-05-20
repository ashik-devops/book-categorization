import prisma from "../../lib/Prisma";

export default async function withApiAuth(req, res) {
  const _public_key = req.headers["x-clx-api-public-key"];
  const _private_key = req.headers["x-clx-api-private-key"];
  const _origin = req.headers["origin"];
  if (_origin && _public_key && _private_key) {
    const app = await prisma.app.findFirst({
      where: {
        AND: [
          {
            public_key: _public_key,

            private_key: _private_key,

            status: "ACTIVE",

            app_domain: _origin,
          },
        ],
      },
    });
    return app ? app : false;
  }
  return false;
}
