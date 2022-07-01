const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const users = require("./seedData/users");

const { roles, permissions } = require("./seedData/rbac");
const prismaClient = new PrismaClient();

async function main() {
  await seedPermissions();

  await seedRoles();

  await seedRolePermissions();

  await seedUsers();
}

async function seedUsers() {
  for (let user of users) {
    // user.password = await bcrypt.hash("RodeShifz69", process.env.SECRET);
    let salt = bcrypt.genSaltSync(10);

    user.password = await bcrypt.hash(user.password, salt);
    let user_role = await prismaClient.role.findFirst({
      where: {
        label: user.role,
      },
    });
    user.role = {
      connect: {
        id: user_role.id,
      },
    };

    user = await prismaClient.user.create({
      data: user,
    });
  }
}

async function seedRolePermissions() {
  for (let role of roles) {
    let r = await prismaClient.role.findFirst({
      where: {
        label: role.label,
      },
    });

    for (let permission of role.permissions) {
      if (permission.criteria) {
        if (permission.criteria.value) {
          for (let scope of permission.criteria.value) {
            let p = await prismaClient.permission.findFirst({
              where: {
                name: permission.name,
                entity: permission.entity,
                scope: scope,
                scope_attribute: permission.criteria.attribute,
              },
            });
            if (p) {
              let rp = await prismaClient.rolePermissions.findFirst({
                where: {
                  role_id: r.id,
                  permission_id: p.id,
                },
              });

              if (!rp) {
                await prismaClient.rolePermissions.create({
                  data: {
                    role_id: r.id,
                    permission_id: p.id,
                  },
                });
              }
            }
          }
        }
      } else {
        let p = await prismaClient.permission.findFirst({
          where: {
            name: permission.name,
            entity: permission.entity,
            scope: "*",
            scope_attribute: "*",
          },
        });
        if (p) {
          let rp = await prismaClient.rolePermissions.findFirst({
            where: {
              role_id: r.id,
              permission_id: p.id,
            },
          });

          if (!rp) {
            await prismaClient.rolePermissions.create({
              data: {
                role_id: r.id,
                permission_id: p.id,
              },
            });
          }
        }
        await prismaClient.permission.create({
          data: {
            name: permission.name,
            entity: permission.entity,
          },
        });
      }
    }
  }
}

async function seedRoles() {
  // await prismaClient.role.deleteMany({});

  // await prismaClient.role.upsert({
  //   data: roles.map((row) => {
  //     return {
  //       label: row.label,
  //     };
  //   }),
  // });

  for (let role of roles) {
    await prismaClient.role.upsert({
      where: {
        label: role.label,
      },
      update: {
        label: role.label,
      },
      create: {
        label: role.label,
      },
    });
  }
}

async function seedPermissions() {
  for (let permission of permissions) {
    if (permission.criteria) {
      for (let scope of permission.criteria.value) {
        let exists = await prismaClient.permission.findFirst({
          where: {
            AND: [
              {
                name: {
                  equals: permission.name,
                },
              },
              {
                entity: { equals: permission.entity },
              },
              {
                scope: { equals: scope },
              },
              {
                scope_attribute: { equals: permission.criteria.attribute },
              },
            ],
          },
        });
        if (exists) {
          continue;
        } else {
          await prismaClient.permission.create({
            data: {
              name: permission.name,
              entity: permission.entity,
              scope: scope,
              scope_attribute: permission.criteria.attribute,
            },
          });
        }
      }
    } else {
      let exists = await prismaClient.permission.findFirst({
        where: {
          AND: [
            {
              name: { equals: permission.name },
            },
            {
              entity: { equals: permission.entity },
            },
          ],
        },
      });
      if (exists) {
        continue;
      } else {
        await prismaClient.permission.create({
          data: {
            name: permission.name,
            entity: permission.entity,
          },
        });
      }
    }
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
    process.exit(1);
  });
