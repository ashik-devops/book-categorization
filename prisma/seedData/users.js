const moment = require("moment");

let users = [
  {
    email: "ashik@gmail.com",
    first_name: "Ashik",
    last_name: "Mahmud",
    role: "Superadmin",
    password: "ashik123",
    created_at: moment().toISOString(),
  },
  {
    email: "ruhi@gmail.com",
    first_name: "Ashik",
    last_name: "Mahmud",
    role: "Admin",
    password: "ruhi123",
    created_at: moment().toISOString(),
  },
];

module.exports = users;
