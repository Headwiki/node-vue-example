const mongoose = require('mongoose')
const Task = mongoose.model('Task')

exports.get_all_tasks = (req, res) => {
  Task.find({}, 'name created_date status', function (error, tasks) {
    if (error) { console.error(error); }
    res.send({
      tasks: tasks
    })
  }).sort({_id:-1})
}

// Fetch single task
exports.get_task = (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'name created_date status', function (error, task) {
    if (error) { console.error(error); }
    res.send(task)
  })
}

// Add new task
exports.add_task = (req, res) => {
  const db = req.db;
  const name = req.body.name;
  const new_task = new Task({
    name: name
  })

  new_task.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'task saved successfully!'
    })
  })
}

// Update a task
exports.update_task = (req, res) => {
  var db = req.db;
  Task.findById(req.params.id, 'name created_date status', function (error, task) {
    if (error) { console.error(error); }

    task.name = req.body.name
    task.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
}

// Delete a task
exports.delete_task = (req, res) => {
  var db = req.db;
  Task.remove({
    _id: req.params.id
  }, function(err, task){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
}
