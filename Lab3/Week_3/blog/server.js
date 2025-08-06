require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// RESTful routes
app.post('/api/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/posts', async (req, res) => {
  const filter = {};
  if (req.query.author_id) {
    filter.author_id = req.query.author_id;
  }
  const posts = await Post.find(filter);
  res.json(posts);
});


app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
