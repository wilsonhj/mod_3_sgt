const { resolve } = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(resolve(__dirname, 'db', 'grades.json'));
const middleware = jsonServer.defaults();
const { validateNewEntry, validateUpdate } = require('./middleware');
const PORT = process.env.PORT || 9000;

server.use(middleware);
server.use(jsonServer.bodyParser);

server.use(validateNewEntry);
server.use(validateUpdate);

server.use('/api', router);

server.listen(PORT, () => {
    console.log('Student Grades API running on PORT:', PORT);
});
