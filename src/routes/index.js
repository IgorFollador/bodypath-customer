const bodyParser = require('body-parser');
const usersRoute = require('./usersRoute');
const professionalsRoute = require('./professionalsRoute');
const studentsRoute = require('./studentsRoute');

module.exports = app => {
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });

    app.use(bodyParser.json());
    
    app.get('/', (req, res) => res.send('Customer Microservice'));
    
    app.use(usersRoute);
    app.use(professionalsRoute);
    app.use(studentsRoute);
}