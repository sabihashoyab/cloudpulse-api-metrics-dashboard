// api-server/server.js

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_TABLE_ENDPOINT = `${SUPABASE_URL}/rest/v1/api_metrics`;

const HEADERS = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
};

// GET /metrics - Return all API monitoring data
app.get('/metrics', async (req, res) => {
  try {
    const response = await axios.get(`${SUPABASE_TABLE_ENDPOINT}?order=timestamp.desc`, {
      headers: HEADERS,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

// GET /status - Simple health check
app.get('/status', (req, res) => {
  res.json({ status: 'CloudPulse API is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🌐 CloudPulse API server running on http://localhost:${PORT}`);
});
