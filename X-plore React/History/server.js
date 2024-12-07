const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Use cors middleware
app.use(cors({
    // origin: 'https://xplore-2axl.onrender.com', // Replace with your frontend URL
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: 'GET,POST,DELETE', // Add DELETE method here
    allowedHeaders: 'Content-Type',
}));

// Use body-parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define Schema and Model for search_histories collection
const searchSchema = new mongoose.Schema({
  userId: String,
  query: String,
  timestamp: { type: Date, default: Date.now },
});

const Search = mongoose.model('search_histories', searchSchema, 'search_histories');

// Route to handle saving search histories
app.post('/api/search-histories', async (req, res) => {
  const { userId, query } = req.body;
  try {
    const search = new Search({ userId, query });
    await search.save();
    res.status(200).send('Search history saved');
  } catch (error) {
    console.error('Error saving search history:', error);
    res.status(500).send('Error saving search history');
  }
});

// Route to fetch search histories
app.get('/api/search-histories', async (req, res) => {
  const { userId } = req.query;
  try {
    const histories = await Search.find({ userId }).sort({ timestamp: -1 }).exec();
    res.json(histories);
  } catch (error) {
    console.error('Error fetching search histories:', error);
    res.status(500).send('Error fetching search histories');
  }
});

// Route to delete search histories
app.delete('/api/search-histories', async (req, res) => {
  const { userId } = req.query;
  try {
    await Search.deleteMany({ userId });
    res.status(200).send('Search histories cleared');
  } catch (error) {
    console.error('Error clearing search histories:', error);
    res.status(500).send('Error clearing search histories');
  }
});

// Start the server
const PORT =  5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
