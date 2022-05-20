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

async function seedCases() {
  let user = await prismaClient.user.findFirst({
    where: {
      email: users[0].email,
    },
  });

  let cases = [];
  for (const el of caselist) {
    let c = await prismaClient.case.findFirst({
      where: {
        ref_case: el.portal_id,
      },
    });
    if (c) {
      // console.log(c);
      // console.log("Case Exists: ");
      // console.log(el);
      continue;
    }
    c = {};
    c.ref_case = el.portal_id;
    c.request = el.request;
    c.created_by = {
      connect: {
        id: user.id,
      },
    };
    c.case_status = { connect: { code: "New" } };
    c.scan_date = el.scan_date;
    c.dc_date = el.created_at;
    c.deadline = el.deadline;
    c.arch = el.arch;
    c.request = el.request;
    c.priority = el.priority;
    c.type = el.case_type;
    c.reference = el.ref;
    c.patient_firstname = el.patient_firstname;
    c.patient_lastname = el.patient_lastname;
    let customer = await prismaClient.customer.findFirst({
      select: {
        id: true,
      },
      where: {
        name: el.customer,
      },
    }); // Math.Random returns a float between 0 and 1
    if (customer && customer.id) {
      c.customer = {
        connect: {
          id: customer.id,
        },
      };
      c.patient_country = customer.country;
    }
    try {
      c = await prismaClient.case.create({ data: c });
      console.log({ created: c.id });
    } catch (err) {
      if (customer) {
        console.log(err);
      }
      console.log(customer);
      console.log(el.customer);
    }
  }
  // console.log(await prismaClient.case.createMany({ data: cases }));
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
