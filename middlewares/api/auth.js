import prisma from "../../lib/Prisma";
import moment from "moment";
export default async function withAuth(req, res) {
  const _token = req.headers["x-clx-auth"];
  if (_token) {
    const token = await prisma.token.findFirst({
      where: {
        AND: [
          {
            token: {
              equals: _token,
            },
            revoked_at: {
              equals: null,
            },
            expires_at: {
              gt: moment().toISOString(),
            },
          },
        ],
      },
      include: {
        user: true,
      },
    });

    if (token && token.user) {
      //token is valid now lets extend the expiration period
      await prisma.token.update({
        where: {
          id: token.id,
        },
        data: {
          expires_at: moment().add(1, "d").toISOString(),
        },
      });
      return token.user;
    }
  }
  return false;
}

