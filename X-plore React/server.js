const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://mangesh8736:23605861@hotel.wpqiybc.mongodb.net/SearchEngine');

// Define Schema and Model for search_histories collection
const searchSchema = new mongoose.Schema({
  userId: String,
  query: String,
  timestamp: { type: Date, default: Date.now },
});

const Search = mongoose.model('search_histories', searchSchema, 'search_histories');

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
