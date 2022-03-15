const user = require('../components/user/network');

const routes = function (server) {
    server.use('/api/v1/users', user);
}

module.exports = routes;