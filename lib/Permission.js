import _ from "lodash";
import prisma from "./Prisma";

export async function buildPermissionTree(role, name, entity) {
  const permissions = await prisma.permission.findMany({
    where: {
      name: name,
      entity: entity,
    },
    include: {
      roles: {
        where: {
          role_id: role,
        },
      },
    },
  });

  let permission_tree = {};
  if (permissions) {
    _.forEach(permissions, (permission, index) => {
      if (!_.isEmpty(permission.roles)) {
        if (!permission_tree[permission.scope_attribute]) {
          permission_tree[permission.scope_attribute] = [];
        }
        permission_tree[permission.scope_attribute].push(permission.scope);
      }
    });
  }
  return permission_tree;
}
