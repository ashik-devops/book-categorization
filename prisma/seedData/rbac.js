const permissions = [
  {
    name: "*",
    entity: "*",
  },
];

const roles = [
  {
    label: "Superadmin",
    permissions: permissions,
  },
];

module.exports = { roles, permissions };
