const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author_id: { type: String, required: true },
  publication_date: { type: Date, default: Date.now },
  tags: [String],
  view_count: { type: Number, default: 0 }
}, { collection: 'Blog' });

module.exports = mongoose.model('Post', PostSchema);
