const permissions = [
  {
    name: "*",
    entity: "*",
  },
];

const roles = [
  {
    label: "Superadmin",
    permissions: [
      {
        name: "+",
        entity: "+",
      },
      ...permissions,
    ],
  },
  {
    label: "Admin",
    permissions: permissions,
  },
];

module.exports = { roles, permissions };
