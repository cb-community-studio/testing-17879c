const users = require("./users/users.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
    // ~cb-add-configure-service-name~
};
