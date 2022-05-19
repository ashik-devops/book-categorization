// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcryptjs";
import prisma from "../../../lib/Prisma";
import jwt from "jsonwebtoken";
import moment from "moment";
import ApiResponse from "../../../lib/ApiResponse";
import { comparePassword } from "../../../lib/Bcrypt";
import _ from "lodash";
export default async function handler(req, res, next) {
  const credentials = {
    username: req.body.username,
    password: req.body.password,
  };

  let user = await prisma.user.findFirst({
    where: {
      AND: {
        email: {
          equals: credentials.username,
        },
      },
    },
    select: {
      id: true,
      first_name: true,
      middle_name: true,
      last_name: true,
      email: true,
      password: true,
      role: {
        select: {
          label: true,
          permissions: {
            select: {
              permission: {
                select: {
                  entity: true,
                  name: true,
                  scope: true,
                  scope_attribute: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (user && (await comparePassword(credentials.password, user.password))) {
    let permissions = {};

    for (let p of user.role.permissions) {
      let permission = _.pickBy(p.permission, (value, key) => {
        return ["name", "scope", "scope_attribute"].includes(key);
      });

      if (permissions[p.permission.entity]) {
        permissions[p.permission.entity].push(permission);
      } else {
        permissions[p.permission.entity] = [permission];
      }
    }

    const payload = {
      first_name: user.first_name,
      middle_name: user.middle_name ? user.middle_name : "",
      last_name: user.last_name,
      email: user.email.toLowerCase(),
      role: user.role.label,
      permissions: permissions,
      expires: moment().add(24, "h").toISOString(),
    };
    const token = await prisma.token.create({
      data: {
        token: jwt.sign(
          {
            _payload: payload,
          },
          process.env.SECRET
        ),
        expires_at: payload.expires,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return ApiResponse(
      res,
      {
        _token: {
          token: token.token,
        },
      },
      200
    );
  } else {
    return ApiResponse(res, { error: "Invalid Credentials" }, 401);
  }
}
