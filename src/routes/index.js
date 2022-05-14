const bodyParser = require('body-parser');
const usersRoute = require('./usersRoute');

module.exports = app => {
    app.use(bodyParser.json());
    
    app.get('/', (req, res) => res.send('Customer Microservice'));
    
    app.use(usersRoute);
}