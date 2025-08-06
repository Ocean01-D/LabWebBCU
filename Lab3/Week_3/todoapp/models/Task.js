// models/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
}, { collection: 'Tasks' });

module.exports = mongoose.model('Task', TaskSchema);
