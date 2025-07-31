const Task = require("../models/Task");

//POST /api/tasks
exports.createTask = async (req,res) => {
    const task = await Task.create({ ...req.body, owner: req.user.id});
    res.json(task);
};

//GET /api/tasks/me
exports.getMyTasks = async (req,res) => {
    const tasks = await Task.find({ owner: req.user.id });
    res.json(tasks);
};

//GET /api/tasks/all
exports.getAllTasks = async (req,res) => {
    const tasks = await Task.find().populate("owner", "email");
    res.json(tasks);
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

// DELETE /api/tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
//Left at 1:35:50