const TaskController = require('../controllers/task_controller.js');

const routes = app => {

    app.get('/tasks', TaskController.get);

    app.get('/tasks/:user', TaskController.getByUser);

    app.post('/tasks', TaskController.create);

    app.put('/tasks', TaskController.edit);

    app.delete('/tasks/:id', TaskController.deleteById);
};

module.exports = routes;