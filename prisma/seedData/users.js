const moment = require("moment");

let users = [
  {
    email: "ashik@gmail.com",
    first_name: "Ashik",
    last_name: "Mahmud",
    role: "Superadmin",
    password: "ashik94",
    created_at: moment().toISOString(),
  },
];

module.exports = users;
