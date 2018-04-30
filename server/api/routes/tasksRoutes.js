module.exports = (app) => {
  const tasks = require('../controllers/tasksController')

  app.route('/tasks')
    .get(tasks.get_all_tasks)
    .post(tasks.add_task)

  app.route('/task/:id')
    .get(tasks.get_task)

  app.route('/tasks/:id')
    .put(tasks.update_task)
    .delete(tasks.delete_task)
}
